/**
 * StaggerGroup Animation Component
 * Wrapper component for staggered animations using Framer Motion
 */

"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface StaggerGroupProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  staggerDelay?: number;
  duration?: number;
}

export function StaggerGroup({
  children,
  staggerDelay = 0.1,
  duration = 0.5,
  ...props
}: StaggerGroupProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0,
          },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, ...props }: { children: ReactNode } & HTMLMotionProps<"div">) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
