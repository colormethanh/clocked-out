"useClient";
import { ChangeEvent, useCallback, useEffect, useState } from "react";

// Types
import { ShiftSummary, ShiftDataCalculations } from "@/types/index";

const initialShiftData: ShiftSummary = {
  people: {
    value: 1,
    displayName: "People On Shift",
    name: "people",
    isFloat: false,
  },
  yourTotalTips: {
    value: 0,
    displayName: "Your Total Tips",
    name: "yourTotalTips",
    isFloat: true,
  },
  yourNetSales: {
    value: 0,
    displayName: "Your Net Sales",
    name: "yourNetSales",
    isFloat: true,
  },
  totalTips: {
    value: 0,
    displayName: "Total Tips",
    name: "totalTips",
    isFloat: true,
  },
  hourlyWage: {
    value: 0,
    displayName: "Hourly Wage",
    name: "hourlyWage",
    isFloat: true,
  },
  hoursWorked: {
    value: 0,
    displayName: "Hours Worked",
    name: "hoursWorked",
    isFloat: true,
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
  yourTipPercentage: {
    value: 0,
    displayName: "You Tip Percentage",
    description: "Your total tips against your total sales",
    prefix: "% ",
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
    event: ChangeEvent<HTMLInputElement>,
    dataName: string
  ): void => {
    setShiftSummary((prev) => ({
      ...prev,
      [dataName]: { ...prev[dataName], value: parseFloat(event.target.value) },
    }));
    setCalculations(initialCalculations);
    refreshCalculations();
  };

  const calcHourlyTotal = useCallback((): number => {
    return shiftSummary.hoursWorked.value * shiftSummary.hourlyWage.value;
  }, [shiftSummary]);

  const calcTakeHomeTips = useCallback((): number => {
    return shiftSummary.totalTips.value / shiftSummary.people.value;
  }, [shiftSummary]);

  const calcTakeHomeTotal = useCallback((): number => {
    return calcTakeHomeTips() + calcHourlyTotal();
  }, [calcHourlyTotal, calcTakeHomeTips]);

  const calcCumulativeHourlyRate = useCallback((): number => {
    return calcTakeHomeTotal() / shiftSummary.hoursWorked.value;
  }, [shiftSummary, calcTakeHomeTotal]);

  const refreshCalculations = useCallback((): void => {
    const takeHomeTips = calcTakeHomeTips();
    const takeHomeTotal = calcTakeHomeTotal();
    const cumulativeHourlyRate = calcCumulativeHourlyRate();

    setCalculations((prev) => ({
      ...prev,
      takeHomeTips: { ...prev.takeHomeTips, value: takeHomeTips },
      takeHomeTotal: { ...prev.takeHomeTotal, value: takeHomeTotal },
      cumulativeHourlyRate: {
        ...prev.cumulativeHourlyRate,
        value: cumulativeHourlyRate,
      },
    }));
  }, [calcTakeHomeTips, calcTakeHomeTotal, calcCumulativeHourlyRate]);

  useEffect(() => {
    refreshCalculations();
  }, [shiftSummary, refreshCalculations]);

  return { handleShiftDataChange, shiftSummary, calculations } as const;
}
