import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, easeIn } from "framer-motion";
function Reveal({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  useEffect(() => {
    // console.log(isInView);
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);
  return (
    <div className="relative">
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 175 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.8,
          delay: 0.25,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default Reveal;
