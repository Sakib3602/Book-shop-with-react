import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to={"/home"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/listedbook"}>Listed Book</NavLink>
              </li>
              <li>
                <NavLink to={"/pagestoread"}>Pages To Read</NavLink>
              </li>
              s
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl font-[700]">BOOKI-MAN</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-[700]">
            <li>
              <NavLink
                to={"/home"}
                className={({ isActive }) =>
                  isActive
                    ? "border-2 border-[#23BE0A] text-[#23BE0A] font-[700]"
                    : "font-[500]"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/listedbook"}
                className={({ isActive }) =>
                  isActive
                    ? "border-2 border-[#23BE0A] text-[#23BE0A] font-[700]"
                    : "font-[500]"
                }
              >
                Listed Book
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/pagestoread"}
                className={({ isActive }) =>
                  isActive
                    ? "border-2 border-[#23BE0A] text-[#23BE0A] font-[700]"
                    : "font-[500]"
                }
              >
                Pages To Read
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end space-x-5">
          <Link>
            <button className="bg-[#23BE0A] text-white w-[116px] h-[47px] rounded-lg">
              Log In
            </button>
          </Link>
          <Link>
            <button className="bg-[#59C6D2] text-white w-[116px] h-[47px] rounded-lg">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
