import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import useLogin from "../hooks/useLogin";
import LoginViaProviders from "./LoginViaProviders";
import Logout from "./LogoutViaProviders";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(`from frontend:`, { username, password });
    const loginOrNot = await login({ username, password });
    console.log(`loginOrNOt: `, loginOrNot);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-400 to-blue-500">
      <div className="w-full max-w-md p-8 rounded-lg shadow-lg bg-white bg-opacity-90">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Login to <span className="text-blue-600">ChatApp</span>
        </h1>

        <form onSubmit={handleOnSubmit} method="POST" className="space-y-6">
          <Input
            labelName="Username"
            type="text"
            value={username}
            onChangeFunction={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <Input
            labelName="Password"
            type="password"
            value={password}
            onChangeFunction={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <Link
            to="/signup"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-gray-600"
          >
            {"Don't have an account?"}
          </Link>

          <div className="mt-4">
            <Button
              loading={loading}
              content={"Login"}
              className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </form>
        <LoginViaProviders />
        <Logout />
      </div>
    </div>
  );
};

export default Login;
