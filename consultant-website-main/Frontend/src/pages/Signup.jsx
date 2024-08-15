import React, { useState } from "react";
import { Link } from "react-router-dom";
import GenderCheckBox from "./GenderCheckBox";
import Input from "../components/ui/Input.jsx";
import useSignUp from "../hooks/useSignUp.js";
import Button from "../components/ui/Button.jsx";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
    DOB: "",
  });

  const { loading, signup } = useSignUp();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(`from frontend:`, inputs);
    const sigupOrNot = await signup(inputs);
    console.log(`sigupOrNOt: `, sigupOrNot);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-500/10 to-purple-600/95">
      <div className="w-full max-w-md p-8 rounded-lg shadow-lg bg-white bg-opacity-90">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Sign Up for <span className="text-blue-600">ChatApp</span>
        </h1>

        <form onSubmit={handleOnSubmit} method="POST" className="space-y-6">
          <Input
            labelName="Full Name"
            type="text"
            value={inputs.fullName}
            onChangeFunction={(e) =>
              setInputs({ ...inputs, fullName: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Input
            labelName="Username"
            type="text"
            value={inputs.username}
            onChangeFunction={(e) =>
              setInputs({ ...inputs, username: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Input
            labelName="Password"
            type="password"
            value={inputs.password}
            onChangeFunction={(e) =>
              setInputs({ ...inputs, password: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Input
            labelName="Confirm Password"
            type="password"
            value={inputs.confirmPassword}
            onChangeFunction={(e) =>
              setInputs({ ...inputs, confirmPassword: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Input
            labelName="Date of Birth"
            type="date"
            value={inputs.DOB}
            onChangeFunction={(e) =>
              setInputs({ ...inputs, DOB: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <Link
            to={"/login"}
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-gray-600"
          >
            Already have an account?
          </Link>

          <GenderCheckBox
            selectedGender={inputs.gender}
            onCheckBoxChange={(gender) => setInputs({ ...inputs, gender })}
          />

          <div className="mt-4">
            <Button
              loading={loading}
              content={"Sign Up"}
              className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
