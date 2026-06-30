import React from "react";

function DashboardCard({
  title,
  value,
  color = "text-[#6F4E37]",
  onClick,
  icon,
}) {
  return (
    <button
      onClick={onClick}
      className="
        w-full
        bg-white
        rounded-2xl
        shadow-md
        p-4 sm:p-5 lg:p-6
        text-left
        cursor-pointer
        hover:shadow-xl
        hover:-translate-y-1
        active:scale-[0.98]
        transition-all
        duration-300
        border
        border-transparent
        hover:border-[#D7CCC8]
      "
    >
      <div className="flex items-center justify-between mb-3">

        <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-[#4E342E]">
          {title}
        </h3>

        {icon && (
          <span className="text-2xl sm:text-3xl">
            {icon}
          </span>
        )}

      </div>

      <p className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${color}`}>
        {value}
      </p>
    </button>
  );
}

export default DashboardCard;