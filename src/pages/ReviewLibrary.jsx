import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLibrary } from "../services/library";

export default function ReviewLibrary() {
  const navigate = useNavigate();

  const [files, setFiles] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadLibrary() {
      try {
        const data = await getLibrary();
        setFiles(data);
      } catch (error) {
        console.error(error);
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
    <div className="flex-1 p-6">
      <h1 className="text-3xl font-bold mb-6">
        📚 Review Library
      </h1>

      <input
        type="text"
        placeholder="Search review materials..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border rounded-lg p-3 mb-6"
      />

      {loading ? (
        <p>Loading library...</p>
      ) : filteredFiles.length === 0 ? (
        <p>No review materials found.</p>
      ) : (
        <div className="grid gap-4">
          {filteredFiles.map((file) => (
            <div
              key={file.id}
              className="border rounded-xl p-5 shadow-sm bg-white"
            >
              <h2 className="font-semibold text-lg">
                {file.title}
              </h2>

              <p className="text-sm text-gray-600 mt-1">
                📁 {file.folder}
              </p>

              <p className="text-xs text-gray-500 mt-1">
                {file.type}
              </p>

              <div className="flex gap-3 mt-4">

                <button
                  onClick={() => navigate(`/study/${file.id}`)}
                  className="bg-[#6d4c41] text-white px-4 py-2 rounded-lg hover:bg-[#5d4037]"
                >
                  📖 Study
                </button>

                <a
                  href={file.url}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  🔗 Drive
                </a>

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}