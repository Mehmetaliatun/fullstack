import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";

const PrivateRouter = () => {
  // const user = true;

  //! Consuming yaparak veri cekiyoruz
  const { user } = useContext(LoginContext);
  return user?.email ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
