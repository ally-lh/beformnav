export const NavbarRoutes = [
  //can be moved to database
  //Consultant Routes
  {
    label: "Dashboard",
    desc: "Consultant Dashboard",
    url: "/consultant/dashboard",
    role: ["CONSULTANT"],
  },

  //Admin Routes
  {
    label: "Dashboard",
    desc: "Admin Dashboard",
    url: "/admin/dashboard",
    role: ["ADMIN"],
  },
  {
    label: "Consultants",
    desc: "View all consultants",
    url: "/consultants",
    role: ["ADMIN"],
  },

  {
    label: "Manage Users",
    desc: "Admin View of Users",
    url: "/admin/user-management",
    role: ["ADMIN"],
  },
  //Shared consultant and above Routes
  {
    label: "Projects",
    desc: "View all projects",
    url: "/projects",
    role: ["CONSULTANT", "ADMIN"],
  },
  {
    label: "Clients",
    desc: "View all clients",
    url: "/clients",
    role: ["CONSULTANT", "ADMIN"],
  },
  {
    label: "Add a Form",
    desc: "Add a form to the database",
    url: "/manage/addform",
    role: ["CONSULTANT,ADMIN"],
  },
  {
    label: "Form",
    desc: "Consultant Up View of form",
    url: "/manage/form",
    role: ["ADMIN", "CONSULTANT"],
  },
  //User Routes
  {
    label: "Dashboard",
    url: "/user/dashboard",
    role: ["USER"],
  },
  {
    label: "Contact Us",
    url: "/contact-us",
    role: ["USER"],
  },
  {
    label: "Form",
    url: "/user/form",
    role: ["USER"],
  },
];
