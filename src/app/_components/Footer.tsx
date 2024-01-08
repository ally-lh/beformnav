import Link from "next/link";
import { signIn, signOut } from "next-auth/react";

const Footer = () => {
  return (
    <div className="grid w-full grid-cols-2 bg-mainPurpleAccent">
      <div className="flex items-center justify-center p-4 text-white">
        <h1 className="font-semibold">IMCS</h1>
      </div>
      <div className="flex items-center justify-center space-x-4  text-white">
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/privacy">Privacy</Link>
      </div>
    </div>
  );
};
export default Footer;
