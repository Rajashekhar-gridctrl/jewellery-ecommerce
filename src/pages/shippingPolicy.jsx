import React from "react";

const ShippingPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto mt-5 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Shipping Policy
      </h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          Domestic Shipping
        </h2>
        <p className="text-gray-600">
          We offer <strong>free shipping across India</strong> for all orders.
          Orders are typically processed within <strong>1-2 business days</strong>
          and shipped via reliable courier partners. Delivery times vary by location,
          typically between <strong>3-7 business days</strong>.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          International Shipping
        </h2>
        <p className="text-gray-600">
          Currently, we do not offer international shipping.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          Order Tracking
        </h2>
        <p className="text-gray-600">
          Once your order is shipped, a <strong>tracking number</strong> will be provided
          via email or SMS for easy tracking.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          Delays
        </h2>
        <p className="text-gray-600">
          Delivery times may be impacted by holidays, natural events, or logistical delays.
          We will <strong>notify you promptly</strong> if there are any delays.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          Contact Us
        </h2>
        <p className="text-gray-600">
          For any questions or concerns about your order, please contact our customer service
          team at <strong>info@ramyanagendra.com</strong> or <a href="tel:9381433360">9381433360</a>.
        </p>
      </section>
    </div>
  );
};

export default ShippingPolicy;