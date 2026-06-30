import { useState } from "react";
import { saveUser } from "../services/storage";

function Welcome() {
  const [name, setName] = useState("");
  const [exam, setExam] = useState("November 2026");
  const [reviewCenter, setReviewCenter] = useState("");

  const handleContinue = () => {
    if (!name.trim()) {
      alert("Please enter your name.");
      return;
    }

    saveUser({
      name: name.trim(),
      exam,
      reviewCenter,
      createdAt: new Date().toISOString(),
    });

    // Reload para mabasa agad ng App.jsx ang bagong user
    window.location.reload();
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F8F5F2] px-6">

      <div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl p-10">

        <div className="text-center mb-10">

          <div className="text-6xl mb-4">
            ☕
          </div>

          <h1 className="text-4xl font-bold text-[#3E2723]">
            Welcome to CELE OS
          </h1>

          <p className="text-gray-500 mt-3">
            Your Civil Engineering Productivity Operating System
          </p>

        </div>

        <div className="space-y-6">

          <div>
            <label className="block mb-2 font-semibold text-[#3E2723]">
              What should we call you?
            </label>

            <input
              type="text"
              placeholder="Juan Dela Cruz"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-[#D8CFC7] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#6F4E37]"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-[#3E2723]">
              Target CELE Exam
            </label>

            <select
              value={exam}
              onChange={(e) => setExam(e.target.value)}
              className="w-full rounded-xl border border-[#D8CFC7] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#6F4E37]"
            >
              <option>November 2026</option>
              <option>April 2027</option>
              <option>November 2027</option>
              <option>April 2028</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-semibold text-[#3E2723]">
              Review Center
              <span className="text-gray-400 font-normal">
                {" "}
                (Optional)
              </span>
            </label>

            <input
              type="text"
              placeholder="GERTC, Besavilla, Padilla..."
              value={reviewCenter}
              onChange={(e) => setReviewCenter(e.target.value)}
              className="w-full rounded-xl border border-[#D8CFC7] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#6F4E37]"
            />
          </div>

          <button
            onClick={handleContinue}
            className="w-full bg-[#6F4E37] hover:bg-[#5D4037] text-white rounded-xl py-4 font-semibold text-lg transition-all duration-300 hover:scale-[1.02]"
          >
            Continue →
          </button>

        </div>

        <p className="text-center text-sm text-gray-400 mt-8">
          Your progress is stored locally on this device.
        </p>

      </div>

    </main>
  );
}

export default Welcome;