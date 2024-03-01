"use client";

import { AnimationControls, motion, useAnimationControls } from "framer-motion";
import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react";
import { Collapse } from "../common";

const Context = createContext<{
  isOpen: boolean;
  open: VoidFunction;
  close: VoidFunction;
  toggle: VoidFunction;
  control: {
    animate: AnimationControls;
    transition: { duration: number; ease: string };
  };
} | null>(null);

export const GlobalNav = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false);

  const controls = useAnimationControls();
  const navControls = useAnimationControls();

  const open = () => setIsOpen(true);

  const close = () => setIsOpen(false);

  const toggle = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    [controls, navControls].forEach((control) => control.start({ x: isOpen ? "-300px" : "0px" }));
  }, [controls, isOpen, navControls]);

  const options = {
    isOpen,
    open,
    close,
    toggle,
    control: {
      animate: controls,
      transition: { duration: 0.8, ease: "circOut" },
    },
  };

  return (
    <Context.Provider value={options}>
      {children}

      <motion.div
        animate={navControls}
        transition={{ duration: 0.8, ease: "circOut" }}
        className="fixed top-0 p-8 right-[-300px] min-w-[300px] h-[100vh] overflow-y-scroll z-40 bg-[#767676]"
      >
        <Collapse trigger={<p className="text-3xl text-white font-thin">ABOUT US</p>}>
          {["sample1", "sample2", "sample3"].map((name) => (
            <p key={name} className="text-xs font-extralight text-white">
              {name}
            </p>
          ))}
        </Collapse>
      </motion.div>

      {isOpen && <div className="fixed top-0 left-0 z-[31] w-[100vw] h-[100vh]" onClick={close} />}
    </Context.Provider>
  );
};

export const useGlobalNav = () => {
  const c = useContext(Context);

  if (!c) throw Error("global nav error");

  return c;
};
