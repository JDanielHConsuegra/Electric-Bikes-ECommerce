import React from "react";
import { ITitleTextProps } from "@/types";

export const TitleText: React.FC<ITitleTextProps> = ({ title, text }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full sm:w-3/4 lg:w-1/2 h-auto text-center m-auto mt-10 mb-4 font-sans">
      <h2 className="font-bold text-xl sm:text-2xl lg:text-4xl text-black leading-tight mb-6">{title}</h2>
      <p className="text-base sm:text-lg lg:text-2xl text-black">{text}</p>
    </div>
  );
};