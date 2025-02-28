"use client"
import { useState, ChangeEvent } from "react";
import ShiftDataInput from "./components/ShiftDataInput";
import { ShiftData } from "@/types/index";

const initialShiftData : ShiftData = {
  people: 0,
  totalTips: 0,
  hourlyWage: 0.00,
  hoursWorked: 0
}

export default function Home() {
  const [shiftData, setShiftData] = useState<ShiftData>(initialShiftData);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>, dataName:string) : void => {
    console.log("input for ", dataName, " changed")
    setShiftData((prev) => ({... prev, [dataName]: event.target.value}))
  }; 

  return (
    <div className="h-[100vh] table w-full">
      <div className="h-[calc(100vh-50px)]">
        <main className="flex flex-col p-3">
          <ShiftDataInput value={shiftData.people} labelText={"People"} onInputChange={(event) => handleInputChange(event, "people")} />
          <ShiftDataInput value={shiftData.totalTips} labelText={"Tips"} onInputChange={(event) => handleInputChange(event, "totalTips")} />
          <ShiftDataInput value={shiftData.hourlyWage} labelText={"Hourly wage"} onInputChange={(event) => handleInputChange(event, "hourlyWage")} />
          <ShiftDataInput value={shiftData.hoursWorked} labelText={"Hours Worked"} onInputChange={(event) => handleInputChange(event, "hoursWorked")} />
        </main>
      </div>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center h-[50px]">
        <h1> Footer </h1>
      </footer>
    </div>
  );
}
