import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetailsPage from "./pages/Pdp";
import ShippingPolicy from "./pages/shippingPolicy";
import ContactInfo from "./pages/ContactInfo";
import TermsOfService from "./pages/TermsOfService";
import TrackOrderForm from "./pages/TrackOrderForm";
import AboutUs from "./pages/aboutUs";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/cart";
import OrderDetails from "./pages/OrderDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product" element={<ProductDetailsPage />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/contact-information" element={<ContactInfo />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/track-order" element={<TrackOrderForm />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/order-details" element={<OrderDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;