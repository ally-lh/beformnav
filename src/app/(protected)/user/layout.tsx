"use client";

import "@/styles/globals.css";

import { useSession } from "next-auth/react";

import { redirect } from "next/navigation";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = useSession();
  console.log(session);

  if (!session || session.data?.user.role !== "USER") {
    redirect("/api/auth/signin");
  }

  return (
    <main>{children}</main>
    // <html lang="en">
    //   <body className={`font-sans ${inter.variable} flex flex-col`}>
    //     <SessionProvider session={session}>
    //       <TRPCReactProvider cookies={cookies().toString()}>
    //         {children}
    //       </TRPCReactProvider>
    //     </SessionProvider>
    //   </body>
    // </html>
  );
}
