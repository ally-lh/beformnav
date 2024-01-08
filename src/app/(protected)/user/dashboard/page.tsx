import React from "react";
import { api } from "@/trpc/server";
import FormRender from "@/app/_components/SmallFormRender";
import { getServerAuthSession } from "@/server/auth";
import { redirect } from "next/navigation";

const DashboardPage: React.FC = async () => {
  //   const session = await getServerAuthSession();
  //   if (!session || session.user.role !== "USER") {
  //     redirect("/api/auth/signin");
  //   }
  const data = await api.form.getAllFormSmallDisplay.query();

  return (
    <div className="mx-auto h-80 w-4/5 p-5">
      <h2 className="text-sm font-medium text-gray-500">Forms</h2>
      <ul className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {data.length !== 0 ? (
          data?.map((form) => (
            <li
              key={form?.id}
              className="col-span-1 flex flex-col justify-between rounded-md bg-white p-5 shadow-md"
            >
              <FormRender {...form} />
            </li>
          ))
        ) : (
          <>No Forms Available.</>
        )}
      </ul>
    </div>
  );
};

export default DashboardPage;
