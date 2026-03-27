import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { AboutUs } from "./components/AboutUs";
import { Services } from "./components/Services";
import { Team } from "./components/Team";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: AboutUs },
      { path: "services", Component: Services },
      { path: "team", Component: Team },
      { path: "projects", Component: Projects },
      { path: "contact", Component: Contact },
    ],
  },
]);
