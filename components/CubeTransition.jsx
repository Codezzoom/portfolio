import { motion } from "framer-motion";
import { useEffect } from "react";

export const CubeTransition = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 5000); // 5 seconds animation
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-r from-[#1c2d4a] to-primary">
      <div className="relative">
        {/* Large Cube */}
        <motion.div
          className="w-32 h-32 bg-white rounded-lg absolute"
          initial={{ scale: 0, x: -200 }}
          animate={{
            scale: [0, 1, 1],
            x: [-200, 0, 200],
            y: [0, -50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 5,
            times: [0, 0.3, 1],
            ease: "easeInOut",
          }}
        />

        {/* Medium Cube */}
        <motion.div
          className="w-24 h-24 bg-white rounded-lg absolute"
          initial={{ scale: 0, x: -200 }}
          animate={{
            scale: [0, 1, 1],
            x: [-200, 0, 200],
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 5,
            delay: 0.2,
            times: [0, 0.3, 1],
            ease: "easeInOut",
          }}
        />

        {/* Small Cube */}
        <motion.div
          className="w-16 h-16 bg-white rounded-lg absolute"
          initial={{ scale: 0, x: -200 }}
          animate={{
            scale: [0, 1, 1],
            x: [-200, 0, 200],
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 5,
            delay: 0.4,
            times: [0, 0.3, 1],
            ease: "easeInOut",
          }}
        />

        {/* Music note-like trail effect */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            initial={{
              x: -200,
              y: Math.random() * 100 - 50,
              opacity: 0,
            }}
            animate={{
              x: 200,
              y: [
                Math.random() * 100 - 50,
                Math.random() * -100,
                Math.random() * 100 - 50,
              ],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              delay: i * 0.2,
              ease: "easeInOut",
              times: [0, 0.5, 1],
            }}
          />
        ))}
      </div>
    </div>
  );
};
