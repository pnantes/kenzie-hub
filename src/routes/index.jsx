import { Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/registro";
import Dashboard from "../pages/dashboard";
import { useState } from "react";

const RoutesMain = () => {
  const [user, setUser] = useState([]);

  return (
    <Routes>
      <Route path="/registro" element={<Register />} />
      <Route path="/login" element={<Login setUser={setUser} />} />
      <Route
        path="/dashboard"
        element={<Dashboard user={user} setUser={setUser} />}
      />
    </Routes>
  );
};

export default RoutesMain;
