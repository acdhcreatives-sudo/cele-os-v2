import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import { getLibrary } from "../services/library";

export default function ReviewLibrary() {
  const [files, setFiles] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    async function loadLibrary() {
      try {
        const data = await getLibrary();
        setFiles(data);
      } finally {
        setLoading(false);
      }
    }

    loadLibrary();
  }, []);

  const filteredFiles = useMemo(() => {
    return files.filter((file) =>
      file.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [files, search]);

  return (
    <PageLayout
      title="📚 Review Library"
      subtitle="Browse all your review materials"
    >
      <input
        type="text"
        placeholder="🔍 Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-xl border border-gray-300 p-3 mb-6 focus:outline-none focus:ring-2 focus:ring-[#F57C00]"
      />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filteredFiles.map((file) => (
            <button
              key={file.id}
              onClick={() => navigate(`/study/${file.id}`)}
              className="bg-white rounded-2xl border border-gray-200 shadow hover:shadow-xl transition p-5 text-left"
            >
              <div className="h-2 bg-[#F57C00] rounded-full mb-4"></div>

              <h2 className="font-bold text-lg text-[#121212]">
                {file.title}
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                {file.folder}
              </p>

              <p className="mt-5 text-[#0B3C5D] font-semibold">
                Open Workspace →
              </p>
            </button>
          ))}
        </div>
      )}
    </PageLayout>
  );
}