import { ShiftDataInputProps } from "@/types";
import { useState } from "react";

export default function ShiftDataRange({
  data,
  onInputChange,
}: ShiftDataInputProps) {
  const [value, setValue] = useState(data.value);

  return (
    <>
      <div>
        <label
          className="leading-7 text-sm text-gray-400"
          htmlFor={`${data.name}-range`}
        >
          {data.displayName} :
        </label>
        <div className="flex gap-3">
          <div className="ms-3 font-bold">
            {value}
          </div>

          <input
            className="w-full bg"
            id={`${data.name}-range`}
            type="range"
            name={`${data.name}`}
            value={value}
            min={"0"}
            max={`${data.maxValue}`}
            onChange={(event) => {
              setValue(data.isFloat ? parseFloat(event.target.value) : parseInt(event.target.value));
              onInputChange(data.isFloat ? parseFloat(event.target.value) : parseInt(event.target.value))
            }}
          />
        </div>
      </div>
    </>
  );
}
