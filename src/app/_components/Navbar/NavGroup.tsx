import React from "react";
import { NavbarRoutes } from "./NavbarRoutes";
import { NavbarItem } from "./NavbarItem";

interface NavbarGroupProps {
  currentRole?: string;
}

export function NavbarGroup(props: NavbarGroupProps) {
  return (
    <>
      {NavbarRoutes.map((item) => (
        <NavbarItem
          key={item.label}
          {...item}
          currentRole={props.currentRole}
        />
      ))}
    </>
  );
}
