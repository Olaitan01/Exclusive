import { RoutesPage } from "./pages/RoutesPage";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { cartTotalQuantity } from "./slice/CartSlice.jsx";
import { ToastContainer } from "react-toastify";
import { FetchData } from "./utilis/FetchData.jsx";
import Mobilemenu from "./components/Mobilemenu";

import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
function App() {
  const [isdata, setIsData] = useState([]);

  const productsApi = import.meta.env.VITE_PRODUCTAPI;
  useEffect(() => {
    const setData = async () => {
      const res = await FetchData(productsApi);
      setIsData(res[2].products.Products);
    };
    setData();
  }, [productsApi]);

  return (
    <div>
      <ToastContainer />
      <div className="">
        <Header />
        <Routes>
          {RoutesPage.map((route) => (
            <Route
              key={route.path}
              exact
              path={route.path}
              element={
                <route.component itemNo={cartTotalQuantity} _data={isdata} />
              }
            />
          ))}
        </Routes>
        <Mobilemenu />
        <Footer />
      </div>
    </div>
  );
}

export default App;
