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
        ? "bg-[#F57C00] text-white font-semibold shadow-md"
        : "text-gray-200 hover:bg-[#0B3C5D]"
    }`;

  return (
    <>
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`
          fixed md:sticky top-0 left-0 z-50
          h-screen bg-[#121212] text-white shadow-2xl
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
          <div className="flex items-center justify-between p-4 border-b border-gray-700">

            {!collapsed && (
              <div>
                <h1 className="text-2xl font-bold text-[#F57C00]">
                  CELE OS
                </h1>

                <p className="text-xs text-gray-400">
                  Engineering Productivity
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
              className="w-10 h-10 rounded-lg hover:bg-[#0B3C5D] transition"
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

            <NavLink to="/dashboard" className={menuClass} onClick={closeMobile}>
              <span>🏠</span>
              {!collapsed && <span>Dashboard</span>}
            </NavLink>

            <NavLink to="/subjects" className={menuClass} onClick={closeMobile}>
              <span>📚</span>
              {!collapsed && <span>Subjects</span>}
            </NavLink>

            <NavLink to="/review-library" className={menuClass} onClick={closeMobile}>
              <span>📖</span>
              {!collapsed && <span>Review Library</span>}
            </NavLink>

            <NavLink to="/sessions" className={menuClass} onClick={closeMobile}>
              <span>⏱</span>
              {!collapsed && <span>Study Sessions</span>}
            </NavLink>

            <NavLink to="/analytics" className={menuClass} onClick={closeMobile}>
              <span>📈</span>
              {!collapsed && <span>Analytics</span>}
            </NavLink>

            <NavLink to="/calendar" className={menuClass} onClick={closeMobile}>
              <span>📅</span>
              {!collapsed && <span>Calendar</span>}
            </NavLink>

          </nav>

          {/* Footer */}
          {!collapsed && (
            <div className="border-t border-gray-700 p-4">

              <div className="bg-[#0B3C5D] rounded-xl p-3">
                <p className="text-sm font-semibold text-white">
                  CELE OS v2
                </p>

                <p className="text-xs text-gray-300 mt-1">
                  Built for Future Engineers 👷
                </p>
              </div>

            </div>
          )}

        </div>
      </aside>
    </>
  );
}

export default Sidebar;