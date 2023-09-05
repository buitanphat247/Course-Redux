import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increasebyvalue, increment } from "../redux-toolkit/counterslice";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col items-center p-5 bg-white shadow-black shadow-2xl w-[700px] mx-auto mt-10">
      <h2 className="mb-10 text-2xl">Count: {count}</h2>
      <div className="flex justify-center items-center gap-x-5">
        <button
          className="border text-2xl p-2 capitalize"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="border text-2xl p-2 capitalize"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          className="border text-2xl p-2 capitalize"
          onClick={() => dispatch(increasebyvalue({
            value_number: 1000  
          }))}
        >
          Increase by 10
        </button>
      </div>
    </div>
  );
};

export default Counter;
