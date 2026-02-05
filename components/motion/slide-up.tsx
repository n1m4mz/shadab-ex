/**
 * SlideUp Animation Component
 * Wrapper component for slide-up animations using Framer Motion
 */

"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface SlideUpProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
}

export function SlideUp({
  children,
  delay = 0,
  duration = 0.5,
  distance = 20,
  ...props
}: SlideUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
