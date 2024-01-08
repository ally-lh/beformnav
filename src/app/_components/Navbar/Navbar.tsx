"use client";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
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

// import NavRoutes from "./NavRoutes";
import { NavbarGroup } from "./NavGroup";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const { data: session } = useSession();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="shadow-lg">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        <div className=" flex items-center lg:flex-1">
          <Link href="#" className="-m-1.5 p-1.5 font-bold ">
            <span className="sr-only">IMCS</span>
            IMCS
          </Link>
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
          <NavbarGroup currentRole={session?.user?.role} />
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
                <NavbarGroup currentRole={session?.user?.role} />
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
  );
};

export default Navbar;
