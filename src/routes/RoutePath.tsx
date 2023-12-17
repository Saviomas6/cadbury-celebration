import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { Paths } from "./path";

import MainPage from "../pages/MainPage";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";
import {
  DesktopScreenContainer,
  DesktopScreenMainContainer,
  DesktopScreenText,
  MobileScreenContainer,
  OpacityAnimation,
} from "../styles/sharedStyle";
import LandingPage from "../pages/landingPage/LandingPage";
import { useEffect, useState } from "react";

export interface RouteDefinition {
  element: any;
  routes?: RouteDefinition[];
  path: string;
  protected?: boolean;
  redirect?: any;
  title?: string;
  requires?: any;
  pathType?: number;
}

const NotFoundRoute: RouteDefinition = {
  path: "*",
  element: NotFoundPage,
  protected: false,
  title: "",
};

export const routes: RouteDefinition[] = [
  {
    path: Paths.home,
    element: MainPage,
    protected: false,
    title: "Home Section",
  },
].concat(NotFoundRoute as any);

const RoutePath = () => {
  const [showLandingPage, setShowLandingPage] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLandingPage(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  function getRouteRenderWithAuth(isLoggedIn: boolean, route: RouteDefinition) {
    const RouteComponent = route.requires
      ? route.requires(route.element)
      : route.element;

    if (!isLoggedIn && !route.protected) {
      return { element: <RouteComponent /> };
    } else if (!isLoggedIn && route.protected) {
      return { element: <Navigate to={Paths.home} /> };
    } else if (isLoggedIn === route.protected) {
      return { element: <RouteComponent /> };
    } else if (isLoggedIn && route.path === "*") {
      return { element: <RouteComponent /> };
    } else if (isLoggedIn) {
      return { element: <RouteComponent /> };
    }
  }

  const mapRoutes = (route: RouteDefinition, i: number) => {
    const render = getRouteRenderWithAuth(true, route);
    return <Route key={i} path={route.path} {...render} />;
  };

  return (
    <>
      <DesktopScreenContainer>
        <DesktopScreenMainContainer>
          <DesktopScreenText>Desktop screen not available</DesktopScreenText>
        </DesktopScreenMainContainer>
      </DesktopScreenContainer>
      {showLandingPage ? (
        <OpacityAnimation>
          <LandingPage />
        </OpacityAnimation>
      ) : (
        <MobileScreenContainer>
          <Layout>
            <Routes>{routes.map(mapRoutes)}</Routes>
          </Layout>
        </MobileScreenContainer>
      )}
    </>
  );
};
export default RoutePath;
