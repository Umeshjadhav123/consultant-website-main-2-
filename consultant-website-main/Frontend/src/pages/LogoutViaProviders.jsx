import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LogoutViaProviders = () => {
  const { logout } = useAuth0();

  return (
    <button
      className="w-full mt-4 bg-red-600 text-white hover:bg-red-700 font-bold py-1 px-4 rounded"
      onClick={(e) => {
        logout({ logoutParams: { returnTo: window.location.origin } });
      }}
    >
      LogOut Via Provider
    </button>
  );
};

export default LogoutViaProviders;
