import { authOptions } from "@/server/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";

interface Props {
  role: string | undefined;
}

export default function NavRoutes({ role }: Props) {
  return (
    <div className="lg-flex space-x-7 ">
      {role == "ADMIN" ? (
        <>
          <Link
            href="/admin/dashboard"
            className="text-gray-90 text-sm font-semibold leading-6"
          >
            Dashboard
          </Link>
          <Link
            href="/admin/form"
            className="text-gray-90 text-sm font-semibold leading-6"
          >
            Form
          </Link>
          <Link
            href="/admin/user-management"
            className="text-gray-90 text-sm font-semibold leading-6"
          >
            Manage Users
          </Link>
        </>
      ) : role === "CONSULTANT" ? (
        <>
          <Link
            href="/consultant/dashboard"
            className="text-gray-90 text-sm font-semibold leading-6"
          >
            Dashboard
          </Link>
          <Link
            href="/consultant/form"
            className="text-gray-90 text-sm font-semibold leading-6"
          >
            Add a Form
          </Link>
        </>
      ) : (
        <>
          <Link
            href="/dashboard"
            className="text-gray-90 text-sm font-semibold leading-6"
          >
            Dashboard
          </Link>
          <Link
            href="/form"
            className="text-gray-90 text-sm font-semibold leading-6"
          >
            Form
          </Link>
          <Link
            href="/contact-us"
            className="text-gray-90 text-sm font-semibold leading-6"
          >
            Contact Us
          </Link>
        </>
      )}
    </div>
  );
}
