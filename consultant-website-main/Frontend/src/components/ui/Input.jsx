import React from "react";

const Input = ({ labelName, type, value, onChangeFunction }) => {
  const id = labelName.replace(/\s+/g, "-").toLowerCase();
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {labelName}
      </label>
      <input
        id={id}
        type={type}
        placeholder={`Enter ${labelName}`}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white text-gray-900"
        value={value}
        onChange={onChangeFunction}
      />
    </div>
  );
};

export default Input;
