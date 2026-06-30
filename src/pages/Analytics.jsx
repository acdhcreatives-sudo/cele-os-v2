import PageLayout from "../components/PageLayout";

export default function Analytics() {
  return (
    <PageLayout
      title="📈 Analytics"
      subtitle="Track your engineering review progress"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

        <div className="bg-white rounded-2xl shadow-md p-6 border-t-4 border-[#F57C00]">
          <h3 className="text-gray-500">Board Readiness</h3>
          <p className="text-4xl font-bold text-[#F57C00] mt-2">
            74%
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 border-t-4 border-[#0B3C5D]">
          <h3 className="text-gray-500">Study Hours</h3>
          <p className="text-4xl font-bold text-[#0B3C5D] mt-2">
            182
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 border-t-4 border-black">
          <h3 className="text-gray-500">Subjects Finished</h3>
          <p className="text-4xl font-bold text-black mt-2">
            12
          </p>
        </div>

      </div>
    </PageLayout>
  );
}