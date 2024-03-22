import { DcPage, HeroPage, MarvelPage, SearchPage } from "../pages";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Navbar } from "./../../UI/components/Navbar";

export const childHeroesRoutes = [
  {
    path: "/marvel",
    element: <MarvelPage />,
  },
  {
    path: "/dc",
    element: <DcPage />,
  },
  {
    path: "/hero/:id",
    element: <HeroPage />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: "/",
    element: <Navigate to={"/marvel"} />,
  },
];

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};
