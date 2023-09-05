import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggle_show_sideBar } from "../../redux-toolkit/globalSlice";
const link = ["dashboard", "ecommerce", "supermarket", "contact"];
const SideBar = () => {
  const { show_sideBar } = useSelector((state) => state.global);
  const dispatch = useDispatch();
  useEffect(() => {
    if (show_sideBar === true) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("show_sideBar", true);
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("show_sideBar", false);
    }
  }, [show_sideBar]);

  return (
    <>
      <div
        onClick={() => dispatch(toggle_show_sideBar(show_sideBar))}
        className="p-5 inline-block cursor-pointer justify-end absolute right-0 "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      <div
        className={`
        ${!show_sideBar ? "-left-[500px]" : "left-10"}
        absolute top-10 w-[350px]  p-5 text-xl capitalize transition-all select-none h-[800px] bg-white rounded-xl`}
      >
        {link.map((item, index) => (
          <div key={index} className="p-5">
            {item}
          </div>
        ))}
      </div>
    </>
  );
};

export default SideBar;
