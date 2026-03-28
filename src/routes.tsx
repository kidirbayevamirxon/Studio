import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { AboutUs } from "./components/AboutUs";
import { Services } from "./components/Services";
import { Team } from "./components/Team";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { AdminLogin } from "./components/admin/AdminLogin";
import { AdminLayout } from "./components/admin/AdminLayout";
import { AdminDashboard } from "./components/admin/AdminDashboard";
import { AdminTeam } from "./components/admin/AdminTeam";
import { AdminProjects } from "./components/admin/AdminProjects";
import { AdminServices } from "./components/admin/AdminServices";

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
  {
    path: "/admin/login",
    Component: AdminLogin,
  },
  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      { path: "dashboard", Component: AdminDashboard },
      { path: "team", Component: AdminTeam },
      { path: "projects", Component: AdminProjects },
      { path: "services", Component: AdminServices },
    ],
  },
]);
