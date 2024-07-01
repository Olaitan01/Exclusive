import { RoutesPage } from "./pages/RoutesPage";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { cartTotalQuantity } from "./slice/CartSlice.jsx";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css"
function App() {
   

  return (
    <div>
      <ToastContainer/>
      <Header />
      <Routes>
        {RoutesPage.map((route) => (
          <Route
            key={route.path}
            exact
            path={route.path}
            element={<route.component itemNo={cartTotalQuantity}/> }
          />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
