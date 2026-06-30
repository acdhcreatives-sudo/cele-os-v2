import { useNavigate } from "react-router-dom";
import DashboardCard from "../components/DashboardCard";
import Footer from "../components/Footer";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <>
      <main className="flex-1 min-h-screen bg-[#F8F5F2] p-8">

        <h1 className="text-4xl font-bold text-[#3E2723]">
          Welcome to CELE OS ☕
        </h1>

        <p className="text-gray-600 mt-2 mb-8">
          Your Civil Engineering Productivity Operating System
        </p>

        <div className="grid gap-6 md:grid-cols-3">

          <DashboardCard
            title="Board Readiness"
            value="74%"
            color="text-green-600"
            icon="📈"
            onClick={() => navigate("/analytics")}
          />

          <DashboardCard
            title="Study Hours"
            value="182 hrs"
            color="text-blue-600"
            icon="⏱"
            onClick={() => navigate("/sessions")}
          />

          <DashboardCard
            title="Subjects"
            value="30"
            color="text-orange-500"
            icon="📚"
            onClick={() => navigate("/subjects")}
          />

        </div>

      </main>

      <Footer />
    </>
  );
}

export default Dashboard;