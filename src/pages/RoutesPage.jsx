import HomePage from "./HomePage";
import Cart from "./Cart";

export const RoutesPage = [
  {
    path: "/",
    component: HomePage ,
    requiresAuth: false,
  },{
    path: "/cart",
    component: Cart ,
  }
];
