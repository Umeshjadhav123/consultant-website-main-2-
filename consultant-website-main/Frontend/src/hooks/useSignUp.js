import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext, useAuthContext } from "../context/AuthContext";

const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
    DOB,
  }) => {
    const success = handleInputErrors({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
      DOB,
    });

    if (!success) return false;
    setLoading(true);

    try {
      const res = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/auth/signup`,
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          credentials: "include",
          body: JSON.stringify({
            fullName,
            username,
            password,
            confirmPassword,
            gender,
            DOB,
          }),
        }
      );

      const data = await res.json();
      const { createdUser, message } = data;

      if (res.status === 201) {
        toast.success(`You are successfully signed up as '${username}'`, {
          style: { width: "100%" },
        });
        localStorage.setItem("user", JSON.stringify(createdUser));
        setAuthUser(createdUser);
      } else {
        toast.error(message, { style: { width: "100%" } });
        return false;
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, { style: { width: "100%" } });
    } finally {
      setLoading(false);
    }
    return true;
  };
  return { loading, signup };
};

export default useSignUp;

const handleInputErrors = ({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
  DOB,
}) => {
  if (
    !fullName ||
    !username ||
    !password ||
    !confirmPassword ||
    !gender ||
    !DOB
  ) {
    toast.error("Please fill in all fields");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  if (password.length < 8) {
    toast.error("Password must be at least 8 characters");
    return false;
  }

  if (!/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)) {
    toast.error(
      "Password must contain at least one special character, one number, one lowercase, one uppercase letter, and at least 8 or more characters"
    );
    return false;
  }

  return true;
};
