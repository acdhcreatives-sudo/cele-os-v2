import { useNavigate } from "react-router-dom";
import DashboardCard from "../components/DashboardCard";
import Footer from "../components/Footer";
import PageLayout from "../components/PageLayout";

function Dashboard() {
  const navigate = useNavigate();

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <>
      <PageLayout
        title="👷 Welcome to CELE OS"
        subtitle="Your Civil Engineering Review Companion"
      >
        {/* Hero Banner */}
        <div className="mb-8 rounded-3xl bg-gradient-to-r from-[#0B3C5D] to-[#121212] text-white p-6 shadow-xl">

          <p className="text-sm opacity-80">
            {today}
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold mt-2">
            Ready to build your future, Engineer? 🚧
          </h2>

          <p className="mt-3 text-gray-200">
            Stay consistent. Every study session brings you closer to becoming a Licensed Civil Engineer.
          </p>

        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

          <DashboardCard
            title="Board Readiness"
            value="74%"
            color="text-[#F57C00]"
            icon="📈"
            onClick={() => navigate("/analytics")}
          />

          <DashboardCard
            title="Study Hours"
            value="182 hrs"
            color="text-[#0B3C5D]"
            icon="⏱"
            onClick={() => navigate("/sessions")}
          />

          <DashboardCard
            title="Subjects"
            value="30"
            color="text-[#121212]"
            icon="📚"
            onClick={() => navigate("/subjects")}
          />

        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-2xl shadow-md p-6">

          <h2 className="text-xl font-bold text-[#121212] mb-5">
            ⚡ Quick Actions
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

            <button
              onClick={() => navigate("/review-library")}
              className="rounded-xl bg-[#F57C00] text-white py-4 hover:opacity-90 transition"
            >
              📖 Review Library
            </button>

            <button
              onClick={() => navigate("/sessions")}
              className="rounded-xl bg-[#0B3C5D] text-white py-4 hover:opacity-90 transition"
            >
              ⏱ Start Session
            </button>

            <button
              onClick={() => navigate("/calendar")}
              className="rounded-xl bg-[#121212] text-white py-4 hover:opacity-90 transition"
            >
              📅 Calendar
            </button>

            <button
              onClick={() => navigate("/analytics")}
              className="rounded-xl border border-[#F57C00] text-[#F57C00] py-4 hover:bg-[#F57C00] hover:text-white transition"
            >
              📊 Analytics
            </button>

          </div>

        </div>
      </PageLayout>

      <Footer />
    </>
  );
}

export default Dashboard;