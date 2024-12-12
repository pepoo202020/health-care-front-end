"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="w-10 h-10 bg-black text-white"
      whileHover={{
        scale: 1.1,
        rotate: 5,
        backgroundColor: "#333",
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.95 }}
    >
      hello
    </motion.div>
  );
}
