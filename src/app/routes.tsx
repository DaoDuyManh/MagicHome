import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HomePage } from "./pages/HomePage";
import { ServiceDetailPage } from "./pages/ServiceDetailPage";
import { PortfolioPage } from "./pages/PortfolioPage";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
	{
		path: "/MagicHome",
		Component: HomePage,
	},
	{
		path: "/service/:serviceId",
		Component: ServiceDetailPage,
	},
	{
		path: "/portfolio",
		Component: PortfolioPage,
	},
	{
		path: "*",
		Component: NotFound,
	},
	 
],
 {
  basename: "/",
}
	  );
