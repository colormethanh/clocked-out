import { ShiftDataInputProps } from "@/types/index";

export default function ShiftDataInput({
  data,
  onInputChange,
}: ShiftDataInputProps) {
  return (
    <>
      <label className="leading-7 text-sm text-gray-400" htmlFor={`${data.name}-input`} > {data.displayName} : </label>
      <input
        className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        value={data.value}
        onChange={(event) => onInputChange(event)}
        type="number"
        min={0}
        id={`${data.name}-input`}
        inputMode={data.isFloat ? "decimal" : "numeric"}
        step={data.isFloat ? 0.01 : 1}
      />
    </>
  );
}
