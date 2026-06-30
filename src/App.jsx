import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Sidebar from "./components/Sidebar";
import InstallButton from "./components/InstallButton";

import Dashboard from "./pages/Dashboard";
import Subjects from "./pages/Subjects";
import Sessions from "./pages/Sessions";
import Analytics from "./pages/Analytics";
import Calendar from "./pages/Calendar";
import Welcome from "./pages/Welcome";
import ReviewLibrary from "./pages/ReviewLibrary";
import StudyWorkspace from "./pages/StudyWorkspace";

import { getUser } from "./services/storage";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const savedUser = getUser();
    setUser(savedUser);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#F8F5F2]">
        Loading CELE OS...
      </div>
    );
  }

  if (!user) {
    return <Welcome />;
  }

  return (
    <div className="min-h-screen bg-[#F8F5F2] flex">

      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <main className="flex-1 overflow-auto">

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(true)}
          className="fixed top-4 left-4 z-40 md:hidden bg-[#6d4c41] text-white p-3 rounded-xl shadow-lg"
        >
          ☰
        </button>

        <div className="p-4 md:p-6 lg:p-8">

          <Routes>

            <Route
              path="/"
              element={<Navigate to="/dashboard" replace />}
            />

            <Route
              path="/dashboard"
              element={<Dashboard />}
            />

            <Route
              path="/subjects"
              element={<Subjects />}
            />

            <Route
              path="/review-library"
              element={<ReviewLibrary />}
            />

            <Route
              path="/study/:id"
              element={<StudyWorkspace />}
            />

            <Route
              path="/sessions"
              element={<Sessions />}
            />

            <Route
              path="/analytics"
              element={<Analytics />}
            />

            <Route
              path="/calendar"
              element={<Calendar />}
            />

          </Routes>

        </div>

      </main>

      <InstallButton />

    </div>
  );
}

export default App;