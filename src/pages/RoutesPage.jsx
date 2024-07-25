import HomePage from "./HomePage";
import Cart from "./Cart";
import ProductDetailsPage from "./ProductDetailsPage";
import ContactPage from "./ContactPage";
import About from "./About";
import Auth from "./Auth";
import Checkout from "./Checkout";

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
  {
    path: "/about",
    component: About,
  },
  {
    path: "/auth",
    component: Auth,
  },
  {
    path: "/checkout",
    component: Checkout,
  },
];
