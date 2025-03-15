
// Types
export interface ShiftField {
  value: number;
  displayName: string;
  name: string;
  isFloat: boolean;
  fieldType: string;
  maxValue: number;
}

export interface Calculation {
  value: number;
  displayName: string;
  description: string;
  prefix: string;
  suffix: string;
}

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
  data: ShiftField;
  onInputChange: (value: number) => void;
}

export interface ShiftCalculationProp {
  calculation: Calculation;
}
