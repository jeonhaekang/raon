"use client";

import { AnimationControls, motion, useAnimationControls } from "framer-motion";
import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react";
import { Collapse } from "../common";

const menus = [
  {
    title: "ABOUT US",
    children: [
      {
        title: "RAONについて",
        href: "/about/intro",
      },
      {
        title: "会社概要",
        href: "/about/profile",
      },
      {
        title: "業務内容",
        href: "/about/business",
      },
      {
        title: "沿革",
        href: "/about/history",
      },
    ],
  },
  { title: "BRANS", href: "/brand" },
  { title: "CONTACT", href: "/contact" },
];

interface MenuAniProps extends PropsWithChildren {
  inPlay: boolean;
}

interface MenuItemProps extends MenuAniProps {
  title: string;
  href?: string;
}

const MenuAni = ({ children, inPlay }: MenuAniProps) => {
  const controls = useAnimationControls();

  useEffect(() => {
    if (inPlay) {
      controls.start({ translateY: "0%" });
    } else {
      controls.start({ translateY: "100%" });
    }
  }, [controls, inPlay]);

  return (
    <div className="overflow-hidden">
      <motion.div transition={{ duration: 0.3, delay: 0.2 }} animate={controls}>
        {children}
      </motion.div>
    </div>
  );
};

const MenuItem = ({ title, href, inPlay }: MenuItemProps) => (
  <MenuAni inPlay={inPlay}>
    <a href={href} className="text-3xl text-white font-thin">
      {title}
    </a>
  </MenuAni>
);

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
        className="flex flex-col gap-4 fixed top-0 p-8 right-[-300px] min-w-[300px] h-[100vh] overflow-y-scroll z-40 bg-[#767676]"
      >
        {menus.map(({ title, href, children }) => {
          if (children) {
            return (
              <Collapse
                key={title}
                closeTrigger={isOpen === false}
                trigger={<MenuItem title={title} inPlay={isOpen} />}
              >
                <div className="flex flex-col gap-1 mt-2 text-white font-thin">
                  {children.map(({ title, href }) => (
                    <a key={title} href={href}>
                      {title}
                    </a>
                  ))}
                </div>
              </Collapse>
            );
          }
          return <MenuItem key={title} title={title} href={href} inPlay={isOpen} />;
        })}
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
