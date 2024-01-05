import React from "react";

import navRoutes from "./NavRoutes2";
import { NavbarItem } from "./NavbarItem";

interface NavbarGroupProps {
  role?: string;
}

export function NavbarGroup(props: NavbarGroupProps) {
  return (
    <>
      {navRoutes.map((r) => {
        return <NavbarItem key={r.label} {...r} currentRole={props.role} />;
      })}
    </>
  );
}
