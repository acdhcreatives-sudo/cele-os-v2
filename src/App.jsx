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
    <div className="min-h-screen bg-[#f8f5f2] flex">
      <Sidebar />

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

      <InstallButton />
    </div>
  );
}

export default App;