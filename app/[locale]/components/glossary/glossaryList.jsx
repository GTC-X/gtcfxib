"use client";
import React from "react";
import { useGlossaryHook } from "./hooks";

const GlossaryList = () => {
  const { list, active, setActive, data } = useGlossaryHook();
  return (
    <>
      <div className="flex justify-center gap-4 flex-wrap">
        {list?.map((single, index) => {
          const activeItem =
            active == single ? "text-primary scale-150" : "text-secondary text-lg";
          return (
            <span
              className={`text-xl cursor-pointer px-2 ${activeItem}`}
              key={index}
              onClick={() => setActive(single)}
            >
              {single}
            </span>
          );
        })}
      </div>
      <div className="mt-4">
        <h4 className={`HeadingH2 text-white ltr:text-left rtl:text-right p-4 bg-primary`}>{active}</h4>
        <ul className="list-disc px-8 mt-2">
          {data?.map((row) => (
            <li className=" py-1 leading-8 text ltr:text-left rtl:text-right">
              <span className=" font-semibold text-secondary">{row?.term}</span>
              <span className="ltr:pl-2  rtl:pr-2">{row?.definition}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default GlossaryList;
