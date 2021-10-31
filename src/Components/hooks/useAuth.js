import React, { useContext } from "react";
import { AuthContex } from "../Contexts/AuthProvider";

const useAuth = () => {
  return useContext(AuthContex);
};

export default useAuth;
