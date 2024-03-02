import { motion } from "framer-motion";
import { PropsWithChildren } from "react";
import { InView } from "react-intersection-observer";

interface FadeUpProps extends PropsWithChildren {
  className?: string;
}

export const FadeUp = ({ children, className }: FadeUpProps) => {
  return (
    <InView triggerOnce>
      {({ inView, ref }) => (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, translateY: "100px" }}
          animate={{ opacity: inView ? 1 : 0, translateY: inView ? "0px" : "100px" }}
          transition={{ duration: 0.8 }}
          className={className}
        >
          {children}
        </motion.div>
      )}
    </InView>
  );
};
