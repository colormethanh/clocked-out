"useClient";
import { useCallback, useEffect, useState } from "react";

// Types
import { ShiftSummary, ShiftDataCalculations } from "@/types/index";

const initialShiftData: ShiftSummary = {
  people: {
    value: 1,
    displayName: "People On Shift",
    name: "people",
    isFloat: false,
    fieldType: "range",
    maxValue: 10,
  },
  totalTips: {
    value: 0.00,
    displayName: "Shift's Total Tips",
    name: "totalTips",
    isFloat: true,
    fieldType: "input",
    maxValue: 1000
  },
  hourlyWage: {
    value: 0.00,
    displayName: "Your Hourly Wage",
    name: "hourlyWage",
    isFloat: true,
    fieldType: "range",
    maxValue: 100
  },
  hoursWorked: {
    value: 0,
    displayName: "Your Hours Worked",
    name: "hoursWorked",
    isFloat: true,
    fieldType: "range",
    maxValue: 12
  },
  yourTotalTips: {
    value: 0.00,
    displayName: "Your Total Tips",
    name: "yourTotalTips",
    isFloat: true,
    fieldType: "input",
    maxValue: 1000
  },
  yourNetSales: {
    value: 0.00,
    displayName: "Your Net Sales",
    name: "yourNetSales",
    isFloat: true,
    fieldType: "input",
    maxValue: 1000
  },
};

const initialCalculations: ShiftDataCalculations = {
  takeHomeTips: {
    value: 0,
    displayName: "Take Home Tips",
    description: "Your share of the tips today",
    prefix: "$ ",
    suffix: "",
  },
  cumulativeHourlyRate: {
    value: 0,
    displayName: "Cumulative Hourly Rate",
    description:
    "Your calculated hourly rate based on how much you made hourly and your take home tips.",
    prefix: "$ ",
    suffix: " / HR",
  },
  yourTipPercentage: {
    value: 0,
    displayName: "You Tip Percentage",
    description: "Your total tips against your total sales",
    prefix: "% ",
    suffix: "",
  }, 
  takeHomeTotal: {
    value: 0,
    displayName: "Take Home Total",
    description:
      "How much money you made today based on your hourly rate and total take home tips.",
    prefix: "$ ",
    suffix: "",
  },
};

export default function useShiftData() {
  const [shiftSummary, setShiftSummary] =
    useState<ShiftSummary>(initialShiftData);
  const [calculations, setCalculations] =
    useState<ShiftDataCalculations>(initialCalculations);

  const handleShiftDataChange = (
    value: number,
    dataName: string
  ): void => {
    setShiftSummary((prev) => ({
      ...prev,
      [dataName]: { ...prev[dataName], value: value},
    }));
    setCalculations(initialCalculations);
    refreshCalculations();
  };

  const calcHourlyTotal = useCallback((): number => {
    return shiftSummary.hoursWorked.value * shiftSummary.hourlyWage.value;
  }, [shiftSummary]);

  const calcTakeHomeTips = useCallback((): number => {
    return Math.floor((shiftSummary.totalTips.value / shiftSummary.people.value) * 100) / 100;
  }, [shiftSummary]);

  const calcTakeHomeTotal = useCallback((): number => {
    return calcTakeHomeTips() + calcHourlyTotal();
  }, [calcHourlyTotal, calcTakeHomeTips]);

  const calcCumulativeHourlyRate = useCallback((): number => {
    return Math.floor((calcTakeHomeTotal() / shiftSummary.hoursWorked.value) * 100) / 100;
  }, [shiftSummary, calcTakeHomeTotal]);

  const calculateTipPercentage = useCallback(() : number => {
    return Math.floor((shiftSummary.yourTotalTips.value / shiftSummary.yourNetSales.value) * 100); 
  }, [shiftSummary])

  const refreshCalculations = useCallback((): void => {
    const takeHomeTips = calcTakeHomeTips();
    const takeHomeTotal = calcTakeHomeTotal();
    const cumulativeHourlyRate = calcCumulativeHourlyRate();
    const tipPercentage = calculateTipPercentage();

    setCalculations((prev) => ({
      ...prev,
      takeHomeTips: { ...prev.takeHomeTips, value: takeHomeTips },
      takeHomeTotal: { ...prev.takeHomeTotal, value: takeHomeTotal },
      cumulativeHourlyRate: {
        ...prev.cumulativeHourlyRate,
        value: cumulativeHourlyRate,
      },
      yourTipPercentage: {...prev.yourTipPercentage, value: tipPercentage}
    }));
  }, [calcTakeHomeTips, calcTakeHomeTotal, calcCumulativeHourlyRate, calculateTipPercentage]);

  useEffect(() => {
    refreshCalculations();
  }, [shiftSummary, refreshCalculations]);

  return { handleShiftDataChange, shiftSummary, calculations } as const;
}
