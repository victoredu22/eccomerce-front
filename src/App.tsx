import { Home } from "./pages";
import { Provider, useDispatch } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import Basket from "./pages/Basket/Basket";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";
import { getUrl } from "./services/getUrl";
import { setProducts } from "./redux/states/products";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/compras" element={<Basket />} />
          <Route path="*" element={<>Not found</>} />
        </Routes>
        <Footer />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
