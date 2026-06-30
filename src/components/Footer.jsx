function Footer() {
  const openPortfolio = () => {
    window.open(
      "https://canva.link/7me6mu4bn4n5hna",
      "_blank",
      "noopener,noreferrer"
    );
  };

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
            onClick={openPortfolio}
            className="
              rounded-lg
              bg-[#F57C00]
              px-4
              py-2
              text-white
              font-medium
              transition
              hover:bg-[#d96f00]
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