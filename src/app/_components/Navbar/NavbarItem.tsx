import React from "react";

import Link from "next/link";

import type { NavbarItem } from "./Navbar.types";

interface NavbarItemProps extends NavbarItem {
  currentRole?: string;
}
//this is to object which navGroup is going to keep looping and creating
export function NavbarItem(props: NavbarItemProps) {
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
