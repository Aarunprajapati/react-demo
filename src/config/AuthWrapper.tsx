import { Outlet, useNavigate } from "react-router-dom";

const AuthWrapper = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  if (!token) navigate("/login");
  return <Outlet/>;
};

export default AuthWrapper;
