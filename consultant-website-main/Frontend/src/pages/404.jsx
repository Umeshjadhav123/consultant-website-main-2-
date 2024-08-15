import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 text-gray-800 p-4"
      style={{
        backgroundImage: "url('https://source.unsplash.com/1600x900/404')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-8">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
