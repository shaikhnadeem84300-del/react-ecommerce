import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";


import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import LoginSinup from "./Pages/LoginSinup";
import Footer from "./Components/Footer/Footer";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import men_banner from "./Components/Assets/banner_mens.png";
import women_banner from "./Components/Assets/banner_women.png";
import kid_banner from "./Components/Assets/banner_kids.png";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const paypalOptions = {
  "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID || "test",
  currency: "USD",
};

function App() {
  return (
    <BrowserRouter>
        <PayPalScriptProvider options={paypalOptions}>
          <Elements stripe={stripePromise}>
            <Navbar />

            <Routes>
              <Route path="/" element={<Shop />} />
              <Route
                path="/mens"
                element={<ShopCategory banner={men_banner} category="men" />}
              />
              <Route
                path="/womens"
                element={<ShopCategory banner={women_banner} category="women" />}
              />
              <Route
                path="/kids"
                element={<ShopCategory banner={kid_banner} category="kid" />}
              />
              <Route path="/product/:productId" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/login" element={<LoginSinup />} />
            </Routes>

            <Footer />
          </Elements>
        </PayPalScriptProvider>
    </BrowserRouter>
  );
}

export default App;
