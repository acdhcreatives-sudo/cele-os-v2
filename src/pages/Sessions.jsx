import { useEffect, useState } from "react";
import { getSubjects } from "../services/api";

function Sessions() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState("");

  // Load subjects from Google Sheets
  useEffect(() => {
    async function loadSubjects() {
      const data = await getSubjects();
      setSubjects(data);

      if (data.length > 0) {
        setSelectedSubject(data[0].subject);
      }
    }

    loadSubjects();
  }, []);

  // Timer
  useEffect(() => {
    let interval = null;

    if (running) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [running]);

  function formatTime() {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");

    return `${hrs}:${mins}:${secs}`;
  }

  function startTimer() {
    setRunning(true);
  }

  function stopTimer() {
    setRunning(false);
  }

  function resetTimer() {
    setRunning(false);
    setSeconds(0);
  }

  return (
    <main className="flex-1 p-8 bg-[#f7f3ef] min-h-screen">
      <h2 className="text-4xl font-bold text-[#3e2723] mb-8">
        Study Session
      </h2>

      <div className="bg-white rounded-2xl shadow-lg p-10 max-w-xl">

        <label className="block font-semibold mb-2">
          Subject
        </label>

        <select
          className="border rounded-lg p-3 w-full mb-8"
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
        >
          {subjects.map((subject) => (
            <option
              key={subject.subjectId}
              value={subject.subject}
            >
              {subject.subject}
            </option>
          ))}
        </select>

        <div className="text-center">

          <p className="text-7xl font-bold text-[#6d4c41] mb-10">
            {formatTime()}
          </p>

          <div className="flex gap-4 justify-center">

            <button
              onClick={startTimer}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl transition"
            >
              ▶ Start
            </button>

            <button
              onClick={stopTimer}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl transition"
            >
              ■ Stop
            </button>

            <button
              onClick={resetTimer}
              className="bg-gray-700 hover:bg-gray-800 text-white px-8 py-3 rounded-xl transition"
            >
              ↺ Reset
            </button>

          </div>

        </div>

      </div>

    </main>
  );
}

export default Sessions;