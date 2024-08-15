import React from "react";

const Button = ({ loading, content, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`btn btn-block btn-sm mt-2 h-8 ${
        loading
          ? "bg-blue-800 cursor-not-allowed"
          : "bg-blue-900 hover:bg-blue-800"
      } text-white rounded-md shadow-md transition duration-300 ease-in-out`}
      disabled={loading}
    >
      {loading ? (
        <span className="loading loading-spinner text-white"></span>
      ) : (
        content
      )}
    </button>
  );
};

export default Button;
