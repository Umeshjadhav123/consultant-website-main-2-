import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { AuthContextProvider } from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <Auth0Provider
    // domain={import.meta.env.VITE_AUTH0_DOMAIN}
    domain="dev-jlr8kifhpcxo3iyv.us.auth0.com"
    // clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
    clientId="1obWnOhrgykHs3Jd0FBaczoOEFjY8Rss"
    authorizationParams={{ redirect_uri: window.location.origin }}
  >
    <BrowserRouter>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </BrowserRouter>
  </Auth0Provider>
);
