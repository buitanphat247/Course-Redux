import React from "react";
import useDarkMode from "../../hooks/useDarkMode";

const Toggle = () => {
  const { handleDarkMode } = useDarkMode();
  return (
    <button
      onClick={handleDarkMode}
      className="m-10 bg-blue-500 text-white font-bold uppercase text-2xl
  w-[450px] h-[50px] rounded-lg"
    >
      Dark Theme
    </button>
  );
};

export default Toggle;
