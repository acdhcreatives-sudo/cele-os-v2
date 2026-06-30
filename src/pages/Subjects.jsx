import PageLayout from "../components/PageLayout";

export default function Subjects() {
  const subjects = [
    "Mathematics",
    "Surveying",
    "Hydraulics",
    "Structural Engineering",
    "Steel Design",
    "Reinforced Concrete",
    "Geotechnical Engineering",
    "Transportation",
    "Construction",
    "Engineering Economics",
  ];

  return (
    <PageLayout
      title="📚 Subjects"
      subtitle="Choose a subject to review"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {subjects.map((subject) => (
          <button
            key={subject}
            className="bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition p-6 text-left"
          >
            <div className="h-2 bg-[#F57C00] rounded-full mb-4"></div>

            <h2 className="text-lg font-bold text-[#121212]">
              {subject}
            </h2>

            <p className="mt-3 text-sm text-[#0B3C5D]">
              Open Subject →
            </p>
          </button>
        ))}
      </div>
    </PageLayout>
  );
}