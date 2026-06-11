import { NavLink } from "react-router-dom";

function Navbar() {
  const activeClass = "text-sky-600 border-sky-600";

  return (
    <header className="bg-white/90 border-b border-slate-200 backdrop-blur sticky top-0 z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <NavLink to="/" className="text-xl font-semibold text-slate-900">
          MiniLMS
        </NavLink>

        <nav className="hidden items-center gap-4 md:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition-colors duration-150 ${isActive ? activeClass : "text-slate-600 hover:text-slate-900"}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `transition-colors duration-150 ${isActive ? activeClass : "text-slate-600 hover:text-slate-900"}`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/dashboard/courses"
            className={({ isActive }) =>
              `transition-colors duration-150 ${isActive ? activeClass : "text-slate-600 hover:text-slate-900"}`
            }
          >
            Courses
          </NavLink>
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              `transition-colors duration-150 ${isActive ? activeClass : "text-slate-600 hover:text-slate-900"}`
            }
          >
            Profile
          </NavLink>
          <NavLink
            to="/login"
            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
          >
            Login
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
