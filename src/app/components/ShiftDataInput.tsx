 
import { ShiftDataInputProps } from "@/types/index";


export default function ShiftDataInput({value, onInputChange, labelText}: ShiftDataInputProps) {
  return (
    <>
      <label> {labelText} : </label>
      <input className="bg-gray-50 p-1 text-gray-900" value={value} onChange={(event) => onInputChange(event)} type="number" />
    </>
  );
}
