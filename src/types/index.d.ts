import { ChangeEvent } from "react";

// Types
export interface ShiftField {value: number, displayName: string, name: string, isFloat: boolean}


export interface ShiftSummary {
  people: ShiftData;
  totalTips: ShiftData;
  hourlyWage: ShiftData;
  hoursWorked: ShiftData;
  [key: string]: ShiftData;
}

export interface ShiftDataCalculations {
  takeHomeTips: number,
  hourlyRate: number,
  daysHourlyRate: number,
  takeHomeTotal: number
}


// Props Definition
export interface ShiftDataInputProps {
  data: ShiftData;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}