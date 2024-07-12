import HomePage from "./HomePage";
import Cart from "./Cart";
import ProductDetailsPage from "./ProductDetailsPage";
import ContactPage from "./ContactPage";

export const RoutesPage = [
  {
    path: "/",
    component: HomePage,
    requiresAuth: false,
  },
  {
    path: "/cart",
    component: Cart,
  },
  {
    path: "/productDetailsPage/:name",
    component: ProductDetailsPage,
  },
  {
    path: "/ContactPage",
    component: ContactPage,
  },
];
