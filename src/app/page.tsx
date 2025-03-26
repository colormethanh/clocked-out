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
        <main className="container px-5 md:py-24 py-3 mx-auto ">
          <h1 className="text-5xl font-bold my-3 title-font">
            {" "}
            <span className="text-green-500">C</span>losed{" "}
            <span className="text-green-500">O</span>ut{" "}
          </h1>
          <div className="flex flex-wrap">
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
          </div>
        </main>
      </div>
    </div>
  );
}
