import { ChangeEvent } from "react";




export interface ShiftData {
  people: number;
  totalTips: number;
  hourlyWage: number;
  hoursWorked: number;
}


export interface ShiftDataInputProps {
  value: number;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  labelText: string;
}