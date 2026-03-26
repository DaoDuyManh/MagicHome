import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { ServiceDetailPage } from "./pages/ServiceDetailPage";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/service/:serviceId",
    Component: ServiceDetailPage,
  },
  {
    path: "*",
    Component: NotFound,
  },
], {
  basename: "/MagicHome"
});
