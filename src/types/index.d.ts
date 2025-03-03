import { ChangeEvent } from "react";

// Types
export interface ShiftField {value: number, displayName: string, name: string, isFloat: boolean}
export interface Calculation { value:number, displayName: string, description: string, prefix: string, suffix: string }

export interface ShiftSummary {
  people: ShiftField;
  yourTotalTips: ShiftField;
  yourNetSales: ShiftField;
  totalTips: ShiftField;
  hourlyWage: ShiftField;
  hoursWorked: ShiftField;
  [key: string]: ShiftField;
}

export interface ShiftDataCalculations {
  takeHomeTips: Calculation;
  cumulativeHourlyRate: Calculation;
  takeHomeTotal: Calculation;
  [key: string]: Calculation;

}


// Props Definition
export interface ShiftDataInputProps {
  data: ShiftData;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface ShiftCalculationProp {
  calculation: Calculation
}