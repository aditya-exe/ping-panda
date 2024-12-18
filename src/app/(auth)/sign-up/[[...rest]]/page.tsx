"use client";

import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <div className="w-full flex flex-1 items-center justify-center">
      <SignUp forceRedirectUrl={"/welcome"} fallbackRedirectUrl={"/welcome"} />
    </div>
  );
};

export default SignUpPage;
