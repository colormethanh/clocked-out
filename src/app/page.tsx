"use client";

// Components
import ShiftDataInput from "./components/ShiftDataInput";
import ShiftDataRange from "./components/ShiftDataRange";
import InputsContainer from "./components/InputsContainer";
import CalculationsContainer from "./components/CalculationsContainer";

// Hooks
import useShiftData from "./hooks/useShiftData";
import ShiftCalculation from "./components/ShiftCalculation";

export default function Home() {
  const { shiftSummary, handleShiftDataChange, calculations } = useShiftData();

  return (
    <div className="h-screen table w-full">
      <div className="h-100">
        <main className="container px-5 py-24 mx-auto flex flex-wrap">
          <InputsContainer>
            {Object.keys(shiftSummary).map((key: string) => {
              if (shiftSummary[key].fieldType === "input") {
                return (
                  <ShiftDataInput
                    key={key}
                    data={shiftSummary[key]}
                    onInputChange={(event) =>
                      handleShiftDataChange(event, shiftSummary[key].name)
                    }
                  />
                );
              } else {
                return (
                  <ShiftDataRange
                    key={key}
                    data={shiftSummary[key]}
                    onInputChange={(value) =>
                      handleShiftDataChange(value, shiftSummary[key].name)
                    }
                  />
                );
              }
            })}
          </InputsContainer>
          <CalculationsContainer>
            {Object.keys(calculations).map((key: string) => (
              <ShiftCalculation key={key} calculation={calculations[key]} />
            ))}
          </CalculationsContainer>
        </main>
      </div>
    </div>
  );
}
