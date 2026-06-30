import { NavLink } from "react-router-dom";

function Sidebar() {
  const menuClass = ({ isActive }) =>
    `block p-3 rounded-lg transition ${
      isActive
        ? "bg-[#6d4c41] text-white font-bold"
        : "hover:bg-[#5d4037] text-white"
    }`;

  return (
    <aside className="w-72 bg-[#3e2723] text-white p-6 min-h-screen">

      <h1 className="text-3xl font-bold mb-10">
        CELE OS
      </h1>

      <nav className="space-y-3">

        <NavLink
          to="/dashboard"
          className={menuClass}
        >
          🏠 Dashboard
        </NavLink>

        <NavLink
          to="/subjects"
          className={menuClass}
        >
          📚 Subjects
        </NavLink>

        <NavLink
          to="/review-library"
          className={menuClass}
        >
          📖 Review Library
        </NavLink>

        <NavLink
          to="/sessions"
          className={menuClass}
        >
          ⏱ Study Sessions
        </NavLink>

        <NavLink
          to="/analytics"
          className={menuClass}
        >
          📈 Analytics
        </NavLink>

        <NavLink
          to="/calendar"
          className={menuClass}
        >
          📅 Calendar
        </NavLink>

      </nav>

      <div className="mt-12 border-t border-[#6d4c41] pt-6">

        <p className="text-sm text-gray-300">
          CELE OS v2
        </p>

        <p className="text-xs text-gray-400 mt-1">
          Built by Monica 💙
        </p>

      </div>

    </aside>
  );
}

export default Sidebar;