"useClient";
import { ChangeEvent, useState } from "react";

// Types
import {ShiftSummary, ShiftDataCalculations } from "@/types/index";

const initialShiftData: ShiftDataCollection = {
  people: {value: 0, displayName: "People On Shift", name: "people", isFloat: false},
  totalTips: {value: 0, displayName: "Total Tips", name: "totalTips", isFloat: true},
  hourlyWage: {value: 0, displayName: "Hourly Wage", name: "hourlyWage", isFloat: true},
  hoursWorked: {value: 0, displayName: "Hours Worked", name: "hoursWorked", isFloat: true},
};

const initialCalculations: ShiftDataCalculations = {
  takeHomeTips: 0,
  hourlyRate: 0,
  daysHourlyRate: 0,
  takeHomeTotal: 0
}

export default function useShiftData() {
  const [shiftSummary, setShiftSummary] = useState<ShiftSummary>(initialShiftData);
  const [calculations, setCalculation] = useState<ShiftDataCalculations>(initialCalculations);


  const handleShiftDataChange = (
    event: ChangeEvent<HTMLInputElement>,
    dataName: string
  ): void => {
    setShiftSummary((prev) => ({ ...prev, [dataName]: {...prev[dataName], value: event.target.value} }));
  };

  return { handleShiftDataChange, shiftSummary, calculations } as const;
}
