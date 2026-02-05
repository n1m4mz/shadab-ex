/**
 * Card Component
 * Reusable card component
 */

import { HTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "outlined";
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          "rounded-2xl transition-all duration-300",
          {
            "bg-white dark:bg-gray-900": variant === "default",
            "bg-white shadow-xl shadow-gray-200/50 dark:bg-gray-900 dark:shadow-gray-900/50":
              variant === "elevated",
            "border border-gray-200/50 bg-white/80 backdrop-blur-sm dark:border-gray-800/50 dark:bg-gray-900/80":
              variant === "outlined",
          },
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx("flex flex-col space-y-1.5 p-6", className)}
        {...props}
      />
    );
  }
);

CardHeader.displayName = "CardHeader";

export const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        className={clsx("text-2xl font-semibold leading-none tracking-tight", className)}
        {...props}
      />
    );
  }
);

CardTitle.displayName = "CardTitle";

export const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={clsx("p-6", className)} {...props} />;
  }
);

CardContent.displayName = "CardContent";
