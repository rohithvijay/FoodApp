import React, { Suspense } from "react";
import "bootstrap/dist/css/bootstrap.css";
import AppHeader from "./components/header";
import "./assets/css/styles.css";
import AppBody from "./components/body";
import AppFooter from "./components/footer";
import RestaurantDetailsComponent from "./components/restaurant-details";
import ContactUs from "./components/contact-us";
import Cart from "./components/cart";
import ErrorComponent from "./components/error";
import {Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/AppStore";
import Loading from "./components/shimmer";
import AboutUs from "./components/aboutus";
const AppComponent = () => {
  return (
    <Provider store={appStore}>
      <div className="app">
        <AppHeader />
        <div className="content">
          <Routes>
            <Route path="/" element={<AppBody />} />
            <Route path="/resturantinfo/:resid" element={<RestaurantDetailsComponent />} />
            <Route path="/aboutus" element={<Suspense fallback={<Loading />}><AboutUs /></Suspense>} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/cart" element={<Cart />} />
            {/* Add other routes as needed */}
            <Route path="/*" element={<ErrorComponent />} /> {/* Handle 404 or unknown routes */}
          </Routes>
        </div>
        <AppFooter />
      </div>
    </Provider>
  );
};



export default AppComponent;
