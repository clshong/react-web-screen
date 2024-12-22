import {
  createBrowserRouter,
  Navigate,
  type RouteObject,
} from "react-router-dom";


const routes: RouteObject[] = [
  {
    path: "/", // 根路径重定向
    element: <Navigate to="/dashboard" replace />,
  },
  {
    path: "/login",
    lazy: () =>
      import("@/pages/Login").then((module) => ({ Component: module.default })),
  },
  {
    path: "/dashboard",
    lazy: () =>
      import("@/pages/Dashboard").then((module) => ({
        Component: module.default,
      })),
  },
];

export const router = createBrowserRouter(routes, {
  basename: import.meta.env.VITE_APP_BASE_URL,
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
});
