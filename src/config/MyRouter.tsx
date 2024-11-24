import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
const LanguagePage = lazy(() => import('../pages/language/LanguagePage'));
const LoginPage = lazy(() => import('../pages/login/LoginPage'));
const DashboardPage = lazy(() => import('../pages/dashboard/DashboardPage'));
const RegisterPage = lazy(() => import('../pages/register/RegisterPage'))
const AuthWrapper = lazy(() => import("./AuthWrapper"));

export const Myrouter = createBrowserRouter([
  {
    path: "/",
    element: <AuthWrapper />,
    errorElement: <div>Not Found</div>,
    children: [
      {
        path: "/",
        element: <DashboardPage />,
        children: [

          {
            path: "/language",
            element: <LanguagePage />
          },

        ]
      }
    ],
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  }
]);
