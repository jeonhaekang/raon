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

interface MenuAniProps extends PropsWithChildren {
  inPlay: boolean;
}

interface MenuItemProps extends MenuAniProps {
  title: string;
  href: string;
}

interface MenuGroupProps extends MenuAniProps {
  title: string;
  subMenus: MenuItemProps[];
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

const MenuGroup = ({ title, subMenus, inPlay }: MenuGroupProps) => (
  <MenuAni inPlay={inPlay}>
    <Collapse trigger={<p className="text-3xl text-white font-thin">{title}</p>}>
      {subMenus.map(({ title, href }) => (
        <p key={title} className="text-xs font-extralight text-white">
          <a href={href}>{title}</a>
        </p>
      ))}
    </Collapse>
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

  const menuElements = menus.map(({ title, subMenus, href }) => {
    if (subMenus) {
      return (
        <MenuGroup
          key={title}
          title={title}
          subMenus={subMenus.map((menu) => ({ ...menu, inPlay: isOpen }))}
          inPlay={isOpen}
        />
      );
    }

    return <MenuItem key={title} title={title} href={href} inPlay={isOpen} />;
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
