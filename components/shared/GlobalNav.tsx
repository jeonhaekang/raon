"use client";

import { AnimationControls, motion, useAnimationControls } from "framer-motion";
import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react";
import { Collapse } from "../common";

const menus = [
  {
    title: "ABOUT US",
    subMenus: [
      { title: "sample1", href: "#" },
      { title: "sample2", href: "#" },
      { title: "sample3", href: "#" },
    ],
  },
  { title: "BRANS", href: "#" },
  { title: "CONTACT", href: "#" },
];

interface MenuItemProps {
  title: string;
  href: string;
}

interface MenuGroupProps {
  title: string;
  subMenus: MenuItemProps[];
}

const MenuItem = ({ title, href }: MenuItemProps) => (
  <a href={href} className="text-3xl text-white font-thin">
    {title}
  </a>
);

const MenuGroup = ({ title, subMenus }: MenuGroupProps) => (
  <Collapse trigger={<p className="text-3xl text-white font-thin">{title}</p>}>
    {subMenus.map(({ title, href }) => (
      <p key={title} className="text-xs font-extralight text-white">
        <a href={href}>{title}</a>
      </p>
    ))}
  </Collapse>
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

  const menuElements = menus.map(({ title, subMenus, href }) => {
    if (subMenus) {
      return <MenuGroup key={title} title={title} subMenus={subMenus} />;
    }

    return <MenuItem key={title} title={title} href={href} />;
  });

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
        {menuElements}
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
