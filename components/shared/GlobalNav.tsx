"use client";

import clsx from "clsx";
import { motion, useAnimationControls } from "framer-motion";
import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react";

const Context = createContext<{
  isOpen: boolean;
  open: VoidFunction;
  close: VoidFunction;
  toggle: VoidFunction;
} | null>(null);

export const GlobalNav = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false);

  const controls = useAnimationControls();

  const open = () => setIsOpen(true);

  const close = () => setIsOpen(false);

  const toggle = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    if (isOpen) {
      controls.start({ translateX: "-300px" });
    } else {
      controls.start({ translateX: "0px" });
    }
  }, [controls, isOpen]);

  const options = {
    isOpen,
    open,
    close,
    toggle,
  };

  return (
    <Context.Provider value={options}>
      <motion.div animate={controls} transition={{ duration: 0.8, ease: "circOut" }} className="flex">
        <div className={clsx("min-w-[100vw]")}>{children}</div>

        <div className="sticky top-0 min-w-[300px] h-[100vh] z-40 bg-[#767676]">global nav</div>

        {isOpen && <div className="fixed top-0 left-0 z-[31] w-[100vw] h-[100vh]" onClick={close} />}
      </motion.div>
    </Context.Provider>
  );
};

export const useGlobalNav = () => {
  const c = useContext(Context);

  if (!c) throw Error("global nav error");

  return c;
};

// "use client";

// import clsx from "clsx";
// import { motion, useAnimationControls } from "framer-motion";
// import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react";

// const Context = createContext<{
//   isOpen: boolean;
//   open: VoidFunction;
//   close: VoidFunction;
//   toggle: VoidFunction;
// } | null>(null);

// export const GlobalNav = ({ children }: PropsWithChildren) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const controls = useAnimationControls();
//   const navControls = useAnimationControls();

//   const open = () => setIsOpen(true);

//   const close = () => setIsOpen(false);

//   const toggle = () => setIsOpen((prev) => !prev);

//   useEffect(() => {
// if (isOpen) {
//   controls.start({ translateX: "-300px" });
//   navControls.start({ translateX: "-300px" });
// } else {
//   controls.start({ translateX: "0px" });
//   navControls.start({ translateX: "0px" });
// }
//   }, [controls, isOpen, navControls]);

//   const options = {
//     isOpen,
//     open,
//     close,
//     toggle,
//   };

//   return (
//     <Context.Provider value={options}>
//       <div className="flex overflow-hidden">
//         <motion.div animate={controls} className={clsx("min-w-[100vw]")}>
//           {children}
//         </motion.div>

//         <motion.nav animate={controls} className="min-w-[300px] bg-[#767676]">
//           ddd
//         </motion.nav>
//         ;
//       </div>
//     </Context.Provider>
//   );
// };

// export const useGlobalNav = () => {
//   const c = useContext(Context);

//   if (!c) throw Error("global nav error");

//   return c;
// };
