import { lazy, Suspense } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { Myrouter } from "./config/MyRouter";
import { envConfig } from "./config/envConfig";
const Mainlayout = lazy(() => import(`./clients/${envConfig.orgName}/main/MainLayout.tsx`));


function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Mainlayout>
        <RouterProvider router={Myrouter} />
      </Mainlayout>
    </Suspense>
  );
}

export default App;
