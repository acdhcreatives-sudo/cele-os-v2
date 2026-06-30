import PageLayout from "../components/PageLayout";

export default function Sessions() {
  return (
    <PageLayout
      title="⏱ Study Sessions"
      subtitle="Track your study time"
    >
      <div className="grid md:grid-cols-2 gap-5">

        <div className="bg-white rounded-2xl shadow-md p-6 border-t-4 border-[#0B3C5D]">
          <h2 className="font-bold text-lg">
            Total Hours
          </h2>

          <p className="text-4xl font-bold text-[#0B3C5D] mt-3">
            182 hrs
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 border-t-4 border-[#F57C00]">
          <h2 className="font-bold text-lg">
            Today's Goal
          </h2>

          <p className="text-4xl font-bold text-[#F57C00] mt-3">
            4 hrs
          </p>
        </div>

      </div>
    </PageLayout>
  );
}