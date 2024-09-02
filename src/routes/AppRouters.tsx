import { lazy, Suspense } from "react";

// routing
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { UnAuthRoute } from "../modules/ProtectRoute/ProtectRoute";

const AppRouter = () => {
  const Jobs = lazy(() => import("../modules/Jobs/Jobs"));

  const routerConfig = [
    {
      path: "/",
      element: <UnAuthRoute />,
      children: [{ index: true, element: <Jobs /> }],
      errorElement: <div>error</div>,
    },
  ];

  const router = createBrowserRouter(routerConfig);

  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default AppRouter;
