import { RouteObject } from "react-router-dom";
import HomeLayout from "../layouts/home.layout";
import { createElement } from "react";
import NotFoundPage from "../pages/not-found.page";
import HomePage from "../pages/home.page";
import ContactPage from "../pages/contact.page";
import UserPage from "../pages/user.page";
import LoginPage from "../pages/login.page";
export const publicRoutes: RouteObject[] = [
  {
    path: "/",
    Component: HomeLayout,
    errorElement: createElement(NotFoundPage),
    children: [
      {
        path: "",
        Component: HomePage,
      },
      {
        path: "contact",
        Component: ContactPage,
      },
      {
        path: "user/:id",
        Component: UserPage,
      },
    ],
  },
  {
    path: "/login",
    element: createElement(LoginPage),
  },
];
