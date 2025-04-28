import React from "react";

const OrderDetails = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Order Details</h1>

      {/* Order Summary */}
      <div className="border rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Order #123456</h2>

        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="p-4 text-lg font-semibold text-gray-700">Product</th>
              <th className="p-4 text-lg font-semibold text-gray-700">Quantity</th>
              <th className="p-4 text-lg font-semibold text-gray-700">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-4 flex items-center gap-4">
                <img
                  src="https://source.unsplash.com/100x100/?gold,jewelry"
                  alt="Kasu Black Beads"
                  className="rounded-lg"
                />
                <span className="text-lg font-semibold">Kasu Black Beads</span>
              </td>
              <td className="p-4 text-lg font-semibold text-left align-top">10</td>
              <td className="p-4 text-lg font-semibold text-left align-top">Rs. 3,900.00</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Order Status */}
      <div className="mt-6 border rounded-lg p-6 shadow-md text-gray-700">
        <h2 className="text-xl font-semibold">Order Status: <span className="text-green-600">Confirmed</span></h2>
        <p className="mt-2">Your order has been successfully placed and is being prepared for shipment.</p>
      </div>

      {/* Estimated Delivery */}
      <div className="mt-6 border rounded-lg p-6 shadow-md text-gray-700">
        <h2 className="text-xl font-semibold">Estimated Delivery</h2>
        <p className="mt-2">Expected Delivery Date: <strong>April 30, 2025</strong></p>
      </div>

      {/* Shipping Info */}
      <div className="mt-6 border rounded-lg p-6 shadow-md text-gray-700">
        <h2 className="text-xl font-semibold">Shipping Address</h2>
        <p className="mt-2">Ramya Nagendra Imitations</p>
        <p>1-2-161/A/1, Krishna Nagar, Jagtial, Telangana, India - 505327</p>
      </div>

      {/* Shop Locations */}
      <div className="mt-6 border rounded-lg p-6 shadow-md text-gray-700">
        <h2 className="text-xl font-semibold">Visit Our Stores</h2>
        <p className="mt-2">Experience our latest collections at these locations:</p>
        <ul className="list-disc pl-6 text-lg mt-3">
          <li>RamyaNagendra Imitations, 1-2-161/A/1, Krishna Nagar, Jagtial, TS, Bharat.</li>
          <li>RamyaNagendra Imitations, Hyderabad - Pearl Market, Bharat.</li>
        </ul>
      </div>

      {/* Continue Shopping */}
      <div className="text-center mt-6">
        <a href="/" className="underline text-lg">Continue Shopping</a>
      </div>
    </div>
  );
};

export default OrderDetails;