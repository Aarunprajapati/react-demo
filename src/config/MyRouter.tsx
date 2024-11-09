import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
const LoginPage =lazy(()=>import('../pages/login/LoginPage'));
const DashboardPage = lazy(()=> import('../pages/dashboard/DashboardPage')) ;
const AuthWrapper = lazy(() => import("./AuthWrapper"));

export const Myrouter = createBrowserRouter([
  {
    path: "/",
    element: <AuthWrapper />,
    errorElement: <div>Not Found</div>,
    children: [
        {
            path: 'dashboard',
            element: <DashboardPage/>
        }
    ],
  },
  {
    path: "/login",
    element: <LoginPage/>
  }
]);
