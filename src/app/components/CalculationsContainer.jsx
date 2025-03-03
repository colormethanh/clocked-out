import React, { Component } from "react";

export default function CalculationsContainer({children}) {
  return (
    <div className="flex flex-col flex-wrap lg:py-1  lg:w-2/3 lg:pl-12 lg:text-left">
      <h1 className="title-font font-bold text-2xl lg:text-3xl mb-3">
        {" "}
        Calculated Pay Reports{" "}
      </h1>
      <div className="flex flex-col gap-5">
        {children}
      </div>
    </div>
  );
}
