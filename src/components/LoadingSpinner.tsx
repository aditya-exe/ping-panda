"use client";

import { cva, VariantProps } from "class-variance-authority";
import type { FC } from "react";

interface ILoadingSpinner extends VariantProps<typeof spinnerVariants> {
  className?: string;
}

const spinnerVariants = cva(
  "border-4 rounded-full border-brand-200 border-t-brand-700 animate-spin duration-700",
  {
    variants: {
      size: {
        sm: "size-4 border-2",
        md: "size-6 border-4",
        lg: "size-8 border-4",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

const LoadingSpinner: FC<ILoadingSpinner> = ({ className, size }) => {
  return (
    <div className="flex items-center justify-center">
      <div className={spinnerVariants({ size, className })} />
    </div>
  );
};

export default LoadingSpinner;
