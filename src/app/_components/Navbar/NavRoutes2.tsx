import { NavbarItem } from "./Navbar.types";

const navbarItems: Array<NavbarItem> = [
  {
    label: "Dashboard",
    url: "/dashboard",
    role: ["CONSULTANT"],
  },
  {
    label: "Dashboard",
    url: "/admin/dashboard",
    role: ["ADMIN"],
  },
  {
    label: "Projects",
    url: "/projects",
    role: ["CONSULTANT", "ADMIN"],
  },
  {
    label: "Clients",
    url: "/clients",
    role: ["CONSULTANT", "ADMIN"],
  },
  {
    label: "Consultants",
    url: "/consultants",
    role: ["ADMIN"],
  },
  {
    label: "Admin",
    url: "/admin",
    role: ["ADMIN"],
  },
];

export default navbarItems;
