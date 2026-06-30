import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="mt-8 border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

          <div>
            <h2 className="font-bold text-[#121212] text-lg">
              CELE OS
            </h2>

            <p className="text-sm text-gray-500">
              Version 2.0.0
            </p>
          </div>

          <button
            onClick={() => navigate("/about")}
            className="
              rounded-xl
              bg-[#F57C00]
              px-5
              py-2.5
              text-white
              font-semibold
              shadow-md
              transition-all
              duration-300
              hover:bg-[#d96f00]
              hover:shadow-lg
              hover:-translate-y-1
              active:scale-95
            "
          >
            👷 Built by Monica De Castro
          </button>

        </div>

      </div>
    </footer>
  );
}

export default Footer;