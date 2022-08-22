import { Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/registro";
import Dashboard from "../pages/dashboard";
import ProtectedRoutes from "../components/ProtectedRoutes";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/registro" element={<Register />} />
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<ProtectedRoutes />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default RoutesMain;
