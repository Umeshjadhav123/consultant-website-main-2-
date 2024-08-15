import React from "react";

const GenderCheckBox = ({ onCheckBoxChange, selectedGender }) => {
  return (
    <div className="flex space-x-4">
      <div className="form-control">
        <label
          htmlFor="maleCheckbox"
          className={`label gap-2 cursor-pointer ${
            selectedGender === "male" ? "selected" : ""
          }`}
        >
          <span className="label-text text-gray-800">Male</span>
          <input
            id="maleCheckbox"
            type="checkbox"
            className="checkbox checkbox-primary border-slate-900"
            checked={selectedGender === "male"}
            onChange={() => onCheckBoxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          htmlFor="femaleCheckbox"
          className={`label gap-2 cursor-pointer ${
            selectedGender === "female" ? "selected" : ""
          }`}
        >
          <span className="label-text text-gray-800">Female</span>
          <input
            id="femaleCheckbox"
            type="checkbox"
            className="checkbox checkbox-primary border-slate-900"
            checked={selectedGender === "female"}
            onChange={() => onCheckBoxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;
