import { saveUser } from "../services/storage";

export default function Welcome() {

  function start() {
    saveUser({
      name: "Engineer",
    });

    window.location.reload();
  }

  return (
    <div className="min-h-screen bg-[#F5F7FA] flex items-center justify-center p-5">

      <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-md text-center">

        <div className="text-6xl mb-5">
          👷
        </div>

        <h1 className="text-3xl font-bold text-[#121212]">
          Welcome to CELE OS
        </h1>

        <p className="mt-3 text-gray-600">
          Your Engineering Productivity System
        </p>

        <button
          onClick={start}
          className="mt-8 w-full bg-[#F57C00] hover:bg-[#d96f00] text-white py-3 rounded-xl font-semibold transition"
        >
          Get Started
        </button>

      </div>

    </div>
  );
}