import { RoutesPage } from "./pages/RoutesPage";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { cartTotalQuantity } from "./slice/CartSlice.jsx";
import { ToastContainer } from "react-toastify";
import { FetchData } from "./utilis/FetchData.jsx";

import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
function App() {
  const [isdata, setIsData] = useState([]);

  useEffect(() => {
    const setData = async () => {
      const data = await FetchData("http://localhost:8000/products");
      setIsData(data.Products);
    };
    setData();
  },[]);

  return (
    <div>
      <ToastContainer />
      <Header />
      <Routes>
        {RoutesPage.map((route) => (
          <Route
            key={route.path}
            exact
            path={route.path}
            element={<route.component itemNo={cartTotalQuantity} _data={isdata} />}
          />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
