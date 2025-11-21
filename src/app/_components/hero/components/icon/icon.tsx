import { motion } from "framer-motion";
import { JSX, PropsWithChildren } from "react";

export default function Icon({ children }: PropsWithChildren): JSX.Element {
  return (
    <motion.div
      className="text-black/25"
      initial={{ filter: "blur(50px)" }}
      animate={{ filter: "blur(4px)" }}
      exit={{ filter: "blur(50px)" }}
    >
      {children}
    </motion.div>
  );
}
