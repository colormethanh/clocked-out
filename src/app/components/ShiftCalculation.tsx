import { ShiftCalculationProp } from "@/types/index";
import React from "react";

export default function ShiftCalculation({calculation} : ShiftCalculationProp) {
  return (
    <div className="flex gap-4">
      <div className="flex h-full items-center">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-green-400">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-6 h-6"
            viewBox="0 0 24 24"
          >
            <line x1="12" y1="1" x2="12" y2="23" />
            <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"></path>
          </svg>
        </div>
      </div>
      <div className="flex-1 flex items-center">
        <h2 className="text-white text-lg lg:text-2xl">
          <span className="font-medium"> {calculation.displayName}: </span>{" "}
          <span className=" font-medium italic">{calculation.prefix}{calculation.value}{calculation.suffix} </span>
        </h2>
      </div>
    </div>
  );
}
