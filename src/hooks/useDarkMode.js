import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../redux-toolkit/globalSlice";

const useDarkMode = () => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.global);
  useEffect(() => {
    if (darkMode === true) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", true);
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", false);
    }
  }, [darkMode]);
  const handleDarkMode = () => {
    dispatch(toggleDarkMode(darkMode));
  };
  return {
    handleDarkMode,
  };
};

export default useDarkMode;
