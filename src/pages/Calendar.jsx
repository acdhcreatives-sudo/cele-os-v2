import PageLayout from "../components/PageLayout";

export default function Calendar() {
  return (
    <PageLayout
      title="📅 Study Calendar"
      subtitle="Plan and organize your review schedule"
    >
      <div className="bg-white rounded-2xl shadow-md p-6 border-t-4 border-[#F57C00]">
        <h2 className="text-xl font-bold text-[#121212] mb-3">
          Calendar
        </h2>

        <p className="text-gray-600">
          Your scheduled study sessions will appear here.
        </p>
      </div>
    </PageLayout>
  );
}