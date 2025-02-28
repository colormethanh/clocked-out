import React, { ChangeEvent } from "react";

interface Props {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function TextInput({value, onChange}: Props) {
  return (
    <>
      <label> A label </label>
      <input className="bg-gray-50 p-1 text-gray-900" value={value} onChange={onChange} type="text" />
    </>
  );
}
