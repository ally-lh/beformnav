import Link from "next/link";

import { CreatePost } from "@/app/_components/create-post";
import { getServerAuthSession } from "@/server/auth";
import { api } from "@/trpc/server";

export default async function Home() {
  // const hello = await api.post.hello.query({ text: "from tRPC" });
  const session = await getServerAuthSession();

  return (
    <div className="flex h-screen items-center justify-center text-center text-3xl font-semibold text-slate-900">
      {session?.user.name ? (
        <div>Logged in! Select a nav route</div>
      ) : (
        <div className="flex flex-col items-center">
          <div>You are currently logged out</div>

          <Link
            className="mt-6 w-fit rounded-full
             bg-mainPurpleAccent px-7 py-3 text-xl text-white"
            href="/api/auth/signin"
          >
            Sign in
          </Link>
        </div>
      )}
    </div>
  );
}
