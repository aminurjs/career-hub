import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Button from "../Button/Button";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const Link = (
    <>
      <li className=" mb-3 lg:mb-0">
        <NavLink
          className="text-lg font-semibold hover:underline text-[#757575]"
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className=" mb-3 lg:mb-0">
        <NavLink
          className="text-lg font-semibold hover:underline text-[#757575]"
          to="/jobs"
        >
          Jobs
        </NavLink>
      </li>
      <li className=" mb-3 lg:mb-0">
        <NavLink
          className="text-lg font-semibold hover:underline text-[#757575]"
          to="/statistics"
        >
          Statistics
        </NavLink>
      </li>
      <li className=" mb-3 lg:mb-0">
        <NavLink
          className="text-lg font-semibold hover:underline text-[#757575]"
          to="/blog"
        >
          Blog
        </NavLink>
      </li>
      <li className=" mb-3 lg:mb-0">
        <NavLink
          className="text-lg font-semibold hover:underline text-[#757575]"
          to="/applied"
        >
          Applied Jobs
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-transparent absolute top-0 left-0 w-full">
      <nav className="navbar max-w-7xl mx-auto pt-5">
        <div className="navbar-start">
          <a href="/" className="text-3xl font-extrabold">
            CareerHub
          </a>
        </div>
        <div className="navbar-center py-5">
          <ul className="hidden lg:flex gap-5">{Link}</ul>
        </div>
        <div className="navbar-end">
          <Button text={"Star Applying"}></Button>
          <div className="relative">
            <div className="w-16">
              {!open ? (
                <RiMenu3Fill
                  onClick={() => setOpen(!open)}
                  className="block lg:hidden btn btn-ghost btn-circle p-2 ml-4"
                />
              ) : (
                <AiOutlineClose
                  onClick={() => setOpen(!open)}
                  className="block lg:hidden btn btn-ghost btn-circle p-2 ml-3"
                />
              )}
            </div>
            <ul
              className={`lg:hidden absolute right-1 dropdown-content mt-3 z-[1] p-5 bg-base-100 rounded-box w-52 duration-700 shadow-md ${
                open ? "visible opacity-100" : "invisible opacity-0"
              }`}
            >
              {Link}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
