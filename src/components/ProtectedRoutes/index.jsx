import React, { useContext, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

const ProtectedRoutes = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      console.log(user);
      navigate("/");
    }
  }, []);

  return <>{user && <Outlet />}</>;
};

export default ProtectedRoutes;
