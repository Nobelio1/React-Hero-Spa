import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "../auth";
import { childHeroesRoutes, HeroesRoutes } from "../heroes/routes/HeroesRoutes";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <PublicRouter>
        <LoginPage />,
      </PublicRouter>
    ),
  },
  {
    path: "/",
    element: (
      <PrivateRouter>
        <HeroesRoutes />
      </PrivateRouter>
    ),
    children: childHeroesRoutes,
  },
]);

export const AppRouter = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};
