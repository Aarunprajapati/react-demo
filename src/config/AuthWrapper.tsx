import { Navigate, Outlet } from "react-router-dom";
import SideMenu from "../pages/dashboard/components/SideMenu";

const AuthWrapper = () => {

  const token = localStorage.getItem("token");

  if (!token) return <Navigate to={'/login'} />
  return <>
  <SideMenu/>
  <Outlet/>;
  </>
};

export default AuthWrapper;
