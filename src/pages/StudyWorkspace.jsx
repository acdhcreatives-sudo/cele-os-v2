import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getLibrary } from "../services/library";

function StudyWorkspace() {
  const { id } = useParams();

  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFile() {
      try {
        const library = await getLibrary();
        const selected = library.find((item) => item.id === id);

        setFile(selected || null);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadFile();
  }, [id]);

  if (loading) {
    return (
      <div className="flex-1 p-8">
        <h2>Loading...</h2>
      </div>
    );
  }

  if (!file) {
    return (
      <div className="flex-1 p-8">
        <h2 className="text-2xl font-bold">
          File not found
        </h2>
      </div>
    );
  }

  return (
    <div className="flex-1 p-8 bg-[#F8F5F2]">

      <div className="bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-3xl font-bold">
          📖 {file.title}
        </h1>

        <div className="mt-6 space-y-2 text-gray-700">

          <p>
            <strong>📁 Folder:</strong> {file.folder}
          </p>

          <p>
            <strong>📄 Type:</strong> {file.type}
          </p>

          <p>
            <strong>🕒 Updated:</strong>{" "}
            {new Date(file.updated).toLocaleString()}
          </p>

        </div>

        <div className="flex gap-3 mt-8">

          <a
            href={file.url}
            target="_blank"
            rel="noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl"
          >
            🔗 Open in Google Drive
          </a>

          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-3 rounded-xl"
          >
            ⭐ Favorite
          </button>

          <button
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl"
          >
            ✅ Mark as Studied
          </button>

        </div>

        <div className="mt-10">

          <h2 className="text-2xl font-semibold mb-3">
            📝 My Notes
          </h2>

          <textarea
            rows="10"
            placeholder="Write your notes here..."
            className="w-full border rounded-xl p-4 resize-none"
          />

        </div>

      </div>

    </div>
  );
}

export default StudyWorkspace;