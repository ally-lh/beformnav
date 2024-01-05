import { getServerAuthSession } from "@/server/auth";
import { redirect } from "next/navigation";

const AdminDashboard = async () => {
  const session = await getServerAuthSession();
  if (!session || session.user.role !== "ADMIN") {
    redirect("/api/auth/signin");
  }
  return (
    <div>
      <h1>Admin Dashboard</h1>
      {/* Add your dashboard components and functionality here */}
    </div>
  );
};

export default AdminDashboard;
