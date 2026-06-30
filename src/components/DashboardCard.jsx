import React from "react";

function DashboardCard({
  title,
  value,
  color = "text-[#6F4E37]",
  onClick,
  icon,
}) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-2xl shadow-md p-6 cursor-pointer
                 hover:shadow-2xl hover:-translate-y-1
                 transition-all duration-300 border border-transparent
                 hover:border-[#D7CCC8]"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-[#4E342E]">
          {title}
        </h3>

        {icon && (
          <span className="text-3xl">
            {icon}
          </span>
        )}
      </div>

      <p className={`text-4xl font-bold ${color}`}>
        {value}
      </p>
    </div>
  );
}

export default DashboardCard;