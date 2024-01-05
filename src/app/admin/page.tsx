import Container from "@/app/_components/Staples/Container";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import AdminDashboard from "./dashboard/page";

const page = async () => {
  const session = await getServerSession();
  console.log(session);

  if (!session || session.user.role !== "ADMIN") {
    redirect("/");
  }
  return (
    <Container>
      <div>
        <h1>Welcome, Admin!</h1>
      </div>
      <AdminDashboard />
    </Container>
  );
};

export default page;
