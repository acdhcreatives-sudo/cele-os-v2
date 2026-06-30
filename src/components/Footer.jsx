function Footer() {
  const openPortfolio = () => {
    window.open(
      "https://canva.link/7me6mu4bn4n5hna",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <footer className="mt-10 border-t border-[#E8DDD4] bg-[#F8F5F2]">
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

          <div className="text-center sm:text-left">
            <h2 className="text-base sm:text-lg font-bold text-[#5D4037]">
              CELE OS
            </h2>

            <p className="text-xs sm:text-sm text-gray-500">
              Version 2.0.0
            </p>
          </div>

          <button
            onClick={openPortfolio}
            className="
              text-sm sm:text-base
              text-[#6F4E37]
              font-medium
              hover:text-[#3E2723]
              transition
              underline
              underline-offset-4
            "
          >
            Built by Monica De Castro ❤️
          </button>

        </div>

      </div>
    </footer>
  );
}

export default Footer;