import { db } from "@/db";
import { j } from "./__internals/j";
import { currentUser } from "@clerk/nextjs/server";
import { HTTPException } from "hono/http-exception";

/**
 * Middleware for providing a built-in cache with your Prisma database.
 *
 * You can remove this if you don't like it, but caching can massively speed up your database queries.
 */

// const extendedDatabaseMiddleware = j.middleware(async ({ c, next }) => {
//   const variables = env(c)

//   const pool = new Pool({
//     connectionString: variables.DATABASE_URL,
//   })

//   const adapter = new PrismaNeon(pool)

//   const redis = new Redis({
//     token: variables.REDIS_TOKEN,
//     url: variables.REDIS_URL,
//   })

//   const db = new PrismaClient({
//     adapter,
//   }).$extends(cacheExtension({ redis }))

//   // Whatever you put inside of `next` is accessible to all following middlewares
//   return await next({ db })
// })

const authMiddleware = j.middleware(async ({ c, next }) => {
  const authHeader = c.req.header("Authorization");

  if (authHeader) {
    const apiKey = authHeader.split("Bearer ")[1];
    const user = await db.user.findUnique({
      where: {
        apiKey,
      },
    });

    if (user) {
      return next({ user });
    }
  }

  const auth = await currentUser();

  if (!auth) {
    throw new HTTPException(401, {
      message: "UNAUTHORIZED",
    });
  }

  const user = await db.user.findUnique({
    where: {
      externalId: auth.id,
    },
  });

  if (!user) {
    throw new HTTPException(401, {
      message: "UNAUTHORIZED",
    });
  }

  return next({ user });
});

/**
 * Public (unauthenticated) procedures
 *
 * This is the base piece you use to build new queries and mutations on your API.
 */
export const baseProcedure = j.procedure;
export const publicProcedure = baseProcedure;
// .use(extendedDatabaseMiddleware)
export const privateProcedure = publicProcedure.use(authMiddleware);
