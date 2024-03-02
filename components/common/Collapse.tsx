import { motion, useAnimationControls } from "framer-motion";
import { PropsWithChildren, ReactElement, useEffect, useState } from "react";

interface CollapseProps extends PropsWithChildren {
  trigger: ReactElement;
}

export const Collapse = ({ children, trigger }: CollapseProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const controls = useAnimationControls();

  const variants = {
    open: { height: "auto" },
    closed: { height: 0 },
  };

  useEffect(() => {
    controls.start({ rotate: isOpen ? 0 : 90 });
  }, [controls, isOpen]);

  return (
    <div>
      <button className="flex justify-between items-center w-full" onClick={() => setIsOpen(!isOpen)}>
        {trigger}

        <div className="relative">
          <div className="absolute right-0 w-[20px] h-[1px] bg-white" />

          <motion.div
            animate={controls}
            transition={{ ease: "circOut", duration: 0.7 }}
            className="absolute right-0 w-[20px] h-[1px] bg-white"
          />
        </div>
      </button>

      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 0.5, ease: "circOut" }}
        className="overflow-hidden"
      >
        {children}
      </motion.div>
    </div>
  );
};
