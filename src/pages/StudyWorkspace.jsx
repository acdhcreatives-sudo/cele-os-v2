import { useParams } from "react-router-dom";
import PageLayout from "../components/PageLayout";

export default function StudyWorkspace() {
  const { id } = useParams();

  return (
    <PageLayout
      title="📖 Study Workspace"
      subtitle="Focus mode"
    >
      <div className="bg-white rounded-2xl shadow-lg p-6">

        <h2 className="text-xl font-bold text-[#121212]">
          Google Drive File
        </h2>

        <p className="mt-3 text-gray-500 break-all">
          {id}
        </p>

        <button
          onClick={() =>
            window.open(
              `https://drive.google.com/file/d/${id}/view`,
              "_blank"
            )
          }
          className="mt-6 bg-[#F57C00] hover:bg-[#d96f00] text-white px-5 py-3 rounded-xl transition"
        >
          📂 Open in Google Drive
        </button>

      </div>
    </PageLayout>
  );
}