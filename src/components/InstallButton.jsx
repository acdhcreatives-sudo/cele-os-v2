import { useEffect, useState } from "react";

function InstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const installApp = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    setDeferredPrompt(null);
  };

  if (!deferredPrompt) return null;

  return (
    <button
      onClick={installApp}
      className="
        fixed
        bottom-5
        right-5
        z-50

        flex
        items-center
        gap-2

        rounded-2xl
        bg-[#F57C00]
        px-5
        py-3

        text-sm
        sm:text-base
        font-semibold
        text-white

        shadow-xl
        transition-all
        duration-300

        hover:bg-[#d96f00]
        hover:scale-105
        active:scale-95
      "
    >
      📲 Install CELE OS
    </button>
  );
}

export default InstallButton;