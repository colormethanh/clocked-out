import React, { Component } from "react";

export default class CalculationsContainer extends Component {
  render() {
    return (
      <div className="flex flex-col flex-wrap lg:py-1  lg:w-2/3 lg:pl-12 lg:text-left">
        <h1 className="title-font font-bold text-2xl lg:text-3xl mb-3">
          {" "}
          Calculated Pay Reports{" "}
        </h1>
        <div className="flex flex-col gap-5 ">
          <div className="flex gap-4">
            <div className="flex h-full items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-green-400">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
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
                <span className="font-medium"> Take home tip: </span>{" "}
                <span className=" font-medium italic">$50.00 </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
