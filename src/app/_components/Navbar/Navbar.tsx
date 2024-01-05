"use client";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { getServerAuthSession } from "@/server/auth";

import SessionProvider from "@/app/_components/SessionProvider";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

import NavRoutes from "./NavRoutes";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const { data: session } = useSession();

  const navigation = [
    { name: "Product", href: "#" },
    { name: "Features", href: "#" },
    { name: "Marketplace", href: "#" },
    { name: "Company", href: "#" },
  ];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="shadow-lg">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        <div className=" flex items-center lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 font-bold ">
            <span className="sr-only">IMCS</span>
            IMCS
          </a>
          <span className="pl-4 text-xs font-semibold text-slate-400">
            {session?.user.role ? session.user.role : ""}{" "}
          </span>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <NavbarGroup role={session?.user?.role}/>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href={session ? "/api/auth/signout" : "/api/auth/signin"}
            className="rounded-full border-2 border-transparent bg-mainPurpleAccent px-8 py-2 text-sm font-semibold text-white no-underline transition hover:border-2 hover:border-mainPurpleAccent hover:bg-transparent hover:text-mainPurpleAccent"
          >
            {session ? "Sign out" : "Sign in"} &rarr;
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <NavRoutes role={session?.user?.role} />
              </div>
              <div className="bg-mainPurpleAccent py-6">
                <Link
                  href={session ? "/api/auth/signout" : "/api/auth/signin"}
                  className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
                >
                  {session ? "Sign out" : "Sign in"}
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
    // <nav className="text-darkBlack text-darkBlack flex items-center justify-between p-7 px-10 font-bold shadow-lg">
    //   <div className="">IMCS</div>
    //   <div className="flex items-center space-x-20 font-semibold">
    //     <Link href="/">Dashboard</Link>
    //     <Link href="/">Our Clients</Link>
    //     <Link href="/">Contact Us</Link>
    //     {/* Add other links here */}
    //   </div>

    //   <div>
    //     <Link
    //       href={session ? "/api/auth/signout" : "/api/auth/signin"}
    //       className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
    //     >
    //       {session ? "Sign out" : "Sign in"}
    //     </Link>
    //   </div>
    // </nav>
  );
};

export default Navbar;
