import React from "react";

const Card = () => {
  return (
    <div className="bg-slate-400 w-[450px] m-10 min-h-[550px] p-3 rounded-lg dark:bg-black">
      <div className="w-full h-[300px] rounded-lg overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1614624532983-4ce03382d63d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80"
          alt=""
        />
      </div>
      <div className="text-white mt-2 flex flex-col gap-y-3">
        <h1 className="text-black text-3xl font-bold capitalize text-justify dark:text-white">
          3 ways to get free tickets to travel the world
        </h1>
        <p className="text-black font-medium text-xl dark:text-white">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque eius,
          harum sunt consectetur tempora adipisci ut totam corrupti amet animi?
        </p>
        <button className="w-full h-[50px] bg-blue-500 text-xl font-bold rounded-lg">
          Explore
        </button>
      </div>
    </div>
  );
};

export default Card;
