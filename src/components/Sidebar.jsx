import { NavLink } from "react-router-dom";

function Sidebar({
  collapsed,
  setCollapsed,
  mobileOpen,
  setMobileOpen,
}) {
  const closeMobile = () => {
    if (window.innerWidth < 768) {
      setMobileOpen(false);
    }
  };

  const menuClass = ({ isActive }) =>
    `flex items-center gap-3 rounded-xl transition-all duration-200 ${
      collapsed ? "justify-center p-3" : "px-4 py-3"
    } ${
      isActive
        ? "bg-[#6d4c41] text-white font-semibold"
        : "text-gray-200 hover:bg-[#5d4037]"
    }`;

  return (
    <>
      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`
          fixed md:sticky top-0 left-0 z-50
          h-screen bg-[#3e2723] text-white shadow-xl
          transition-all duration-300

          ${
            mobileOpen
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          }

          ${collapsed ? "md:w-20" : "md:w-72"}
          w-72
        `}
      >
        <div className="flex flex-col h-full">

          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-[#5d4037]">

            {!collapsed && (
              <div>
                <h1 className="text-xl font-bold">
                  CELE OS
                </h1>

                <p className="text-xs text-gray-300">
                  Civil Engineering Review
                </p>
              </div>
            )}

            <button
              onClick={() => {
                if (window.innerWidth < 768) {
                  setMobileOpen(false);
                } else {
                  setCollapsed(!collapsed);
                }
              }}
              className="w-10 h-10 rounded-lg hover:bg-[#5d4037]"
            >
              {window.innerWidth < 768
                ? "✕"
                : collapsed
                ? "☰"
                : "◀"}
            </button>

          </div>

          {/* Navigation */}
          <nav className="flex-1 p-3 space-y-2">

            <NavLink
              to="/dashboard"
              className={menuClass}
              onClick={closeMobile}
            >
              <span>🏠</span>
              {!collapsed && <span>Dashboard</span>}
            </NavLink>

            <NavLink
              to="/subjects"
              className={menuClass}
              onClick={closeMobile}
            >
              <span>📚</span>
              {!collapsed && <span>Subjects</span>}
            </NavLink>

            <NavLink
              to="/review-library"
              className={menuClass}
              onClick={closeMobile}
            >
              <span>📖</span>
              {!collapsed && <span>Review Library</span>}
            </NavLink>

            <NavLink
              to="/sessions"
              className={menuClass}
              onClick={closeMobile}
            >
              <span>⏱</span>
              {!collapsed && <span>Study Sessions</span>}
            </NavLink>

            <NavLink
              to="/analytics"
              className={menuClass}
              onClick={closeMobile}
            >
              <span>📈</span>
              {!collapsed && <span>Analytics</span>}
            </NavLink>

            <NavLink
              to="/calendar"
              className={menuClass}
              onClick={closeMobile}
            >
              <span>📅</span>
              {!collapsed && <span>Calendar</span>}
            </NavLink>

          </nav>

          {/* Footer */}
          {!collapsed && (
            <div className="border-t border-[#5d4037] p-4">

              <p className="text-sm text-gray-300">
                CELE OS v2
              </p>

              <p className="text-xs text-gray-400 mt-1">
                Built by Monica 💙
              </p>

            </div>
          )}

        </div>
      </aside>
    </>
  );
}

export default Sidebar;