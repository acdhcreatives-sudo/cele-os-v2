import { useEffect, useState } from "react";
import { getSubjects } from "../services/api";

function Subjects() {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    async function loadSubjects() {
      const data = await getSubjects();
      setSubjects(data);
    }

    loadSubjects();
  }, []);

  return (
    <main className="flex-1 p-8 bg-[#f7f3ef] min-h-screen">
      <h2 className="text-4xl font-bold mb-8 text-[#3e2723]">
        Subjects
      </h2>

      <div className="space-y-5">
        {subjects.map((subject) => (
          <div
            key={subject.subjectId}
            className="bg-white rounded-2xl shadow-md p-6"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold text-[#3e2723]">
                  {subject.subject}
                </h3>

                <p className="text-gray-500">
                  {subject.category} • {subject.difficulty}
                </p>
              </div>

              <span className="text-xl font-bold text-[#6d4c41]">
                {subject.progress}%
              </span>
            </div>

            <div className="mt-4">
              <div className="flex justify-between text-sm mb-2">
                <span>
                  {subject.completedHours} / {subject.targetHours} hrs
                </span>

                <span>
                  Target: {subject.targetHours} hrs
                </span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-[#6d4c41] h-3 rounded-full transition-all duration-500"
                  style={{
                    width: `${subject.progress}%`,
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Subjects;