import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import NotFound from "./pages/404";
import Consultant from "./pages/Consultant";
import Login from "./pages/Login";

import { Toaster } from "react-hot-toast";
import SignUp from "./pages/Signup";
import { useAuthContext } from "./context/AuthContext.jsx";
import { useAuth0 } from "@auth0/auth0-react";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const { authUser } = useAuthContext();
  const { isAuthenticated } = useAuth0();
  console.log(`isAuthenticated: `, isAuthenticated);

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     localStorage.setItem("isAuthUser", JSON.stringify(true));
  //   } else {
  //     localStorage.setItem("isAuthUser", JSON.stringify(false));
  //   }
  // }, [isAuthenticated]);

  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-50 selection:bg-blue-500">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <Services />
                  <About />
                  <Contact />
                </>
              }
            />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/consultation"
              element={
                authUser || isAuthenticated ? (
                  <Consultant />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route path="/login" element={<Login />} />
            <Route
              path="/signup"
              element={
                authUser || isAuthenticated ? <Navigate to="/" /> : <SignUp />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <Toaster />
    </>
  );
}

export default App;
