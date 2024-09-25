import React, { useContext } from "react";
import { AuthContext } from "../contacts/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Logout = () => {
  const { logOut } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";
  const handleLogout = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
        alert("Logout Successfull!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="h-screen bg-teal-100 flex items-center justify-center">
      <button
        className="bg-red-600 px-8 py-2 text-white rounded"
        onClick={handleLogout}
      >
        logout
      </button>
    </div>
  );
};

export default Logout;
