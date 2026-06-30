import { useNavigate } from "react-router-dom";
import DashboardCard from "../components/DashboardCard";
import Footer from "../components/Footer";
import PageLayout from "../components/PageLayout";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <>
      <PageLayout
        title="☕ Welcome to CELE OS"
        subtitle="Your Civil Engineering Productivity Operating System"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">

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
      </PageLayout>

      <Footer />
    </>
  );
}

export default Dashboard;