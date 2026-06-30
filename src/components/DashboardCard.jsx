import React from "react";

function DashboardCard({
  title,
  value,
  color = "text-[#F57C00]",
  onClick,
  icon,
}) {
  return (
    <button
      onClick={onClick}
      className="
        relative
        w-full
        overflow-hidden
        rounded-2xl
        bg-white
        shadow-md
        border
        border-gray-200
        hover:shadow-xl
        hover:-translate-y-1
        active:scale-[0.98]
        transition-all
        duration-300
        text-left
      "
    >
      {/* Orange Accent */}
      <div className="h-2 w-full bg-[#F57C00]" />

      <div className="p-4 sm:p-5 lg:p-6">

        <div className="flex items-center justify-between">

          <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-[#121212]">
            {title}
          </h3>

          <div className="text-3xl">
            {icon}
          </div>

        </div>

        <p className={`mt-5 text-3xl lg:text-4xl font-bold ${color}`}>
          {value}
        </p>

        <p className="mt-4 text-sm text-[#0B3C5D] font-medium">
          View Details →
        </p>

      </div>
    </button>
  );
}

export default DashboardCard;