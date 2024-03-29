import "@/styles/globals.css";

import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import SessionProvider from "@/app/_components/SessionProvider";

import { TRPCReactProvider } from "@/trpc/react";
import Navbar from "@/app/_components/Navbar/Navbar";
import Footer from "@/app/_components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "BE FORM NAV",
  description: "help",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} flex flex-col`}>
        <SessionProvider session={session}>
          <TRPCReactProvider cookies={cookies().toString()}>
            <Navbar />
            <main className="container mx-auto min-h-screen flex-grow px-5">
              {children}
            </main>
            <Footer />
          </TRPCReactProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
