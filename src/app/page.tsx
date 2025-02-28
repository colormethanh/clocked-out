"use client";

// Components
import ShiftDataInput from "./components/ShiftDataInput";
import InputsContainer from "./components/InputsContainer";
import CalculationsContainer from "./components/CalculationsContainer";

// Hooks
import useShiftData from "./hooks/useShiftData";

export default function Home() {
  const { shiftSummary, handleShiftDataChange } = useShiftData();

  return (
    <div className="h-screen table w-full">
      <div className="h-100">
        <main className="container px-5 py-24 mx-auto flex flex-wrap">
          <InputsContainer>
            {Object.keys(shiftSummary).map((key: string) => 
                <ShiftDataInput
                  key={key}
                  data={shiftSummary[key]}
                  onInputChange={(event) => handleShiftDataChange(event, shiftSummary[key].name)}
                />    
              )}
          </InputsContainer>

          <CalculationsContainer />
        </main>
      </div>
    </div>
  );
}
