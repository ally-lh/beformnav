import React from "react";

import Link from "next/link";

import type { NavbarItem } from "./Navbar.types";

interface NavbarGroupProps extends NavbarItem {
  currentRole?: string;
}

export function NavbarItem(props: NavbarGroupProps) {
  if (
    props.currentRole !== undefined &&
    props.role.includes(props.currentRole)
  ) {
    return (
      <Link
        href={props.url}
        className="text-gray-90 text-sm font-semibold leading-6"
      >
        {props.label}
      </Link>
    );
  } else {
    return <> </>;
  }
}
