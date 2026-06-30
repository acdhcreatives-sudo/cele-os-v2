import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="mt-16 border-t border-[#E8DDD4] bg-[#F8F5F2] px-8 py-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-3">

        <div>
          <h2 className="font-bold text-[#5D4037]">
            CELE OS
          </h2>

          <p className="text-sm text-gray-500">
            Version 1.0.0
          </p>
        </div>

        <button
          onClick={() => navigate("/about")}
          className="text-[#6F4E37] font-medium hover:text-[#3E2723] transition underline underline-offset-4"
        >
          Built by Monica De Castro ❤️
        </button>

      </div>
    </footer>
  );
}

export default Footer;