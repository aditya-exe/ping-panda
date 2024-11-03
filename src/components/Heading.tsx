import { cn } from "@/lib/utils";
import type { FC, HTMLAttributes, ReactNode } from "react";

interface IHeading extends HTMLAttributes<HTMLHeadingElement> {
  children?: ReactNode;
}

const Heading: FC<IHeading> = ({ children, className, ...props }) => {
  return (
    <h1
      className={cn(
        "text-4xl sm:text-5xl text-pretty font-heading font-semibold tracking-tigh text-zinc-800",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

export default Heading;
