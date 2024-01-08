import "@/styles/globals.css";

import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import { useSession } from "next-auth/react";
import { getServerAuthSession } from "@/server/auth";
import SessionProvider from "@/app/_components/SessionProvider";

import { TRPCReactProvider } from "@/trpc/react";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerAuthSession();
  if (!session || session.user.role !== "ADMIN") {
    redirect("/api/auth/signin");
  }

  return <main>{children}</main>;
  //   <html lang="en">
  //   <body className={`font-sans ${inter.variable} flex flex-col`}>
  //     <SessionProvider session={session}>
  //       <TRPCReactProvider cookies={cookies().toString()}>
  //         {children}
  //       </TRPCReactProvider>
  //     </SessionProvider>
  //   </body>
  // </html>
}
