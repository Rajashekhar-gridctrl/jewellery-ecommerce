import React, { useState } from "react";

const CartPage = () => {
    const [quantity, setQuantity] = useState(10);
    const pricePerItem = 390;
    const totalPrice = quantity * pricePerItem;

    return (
        <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Your Cart</h1>

            {/* Continue Shopping Link */}
            <div className="mb-4 text-right">
                <a href="/" className="underline text-lg mb-4 inline-block">
                    Continue Shopping
                </a>
            </div>

            {/* Cart Table */}
            <div className="border rounded-lg p-6">
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
                            <td className="p-4 flex items-start gap-4">
                                <img
                                    src="https://ramyanagendra.com/cdn/shop/files/IMG_20241110_232256.jpg?v=1731823459&width=100"
                                    alt="Kasu Black Beads"
                                    className="rounded-lg"
                                />
                                <div className="text-lg font-semibold">Kasu Black Beads

                                    <br />
                                    <div className="flex items-center gap-4 mt-2">
                                        <button
                                            className="bg-[#CFB484] text-white px-3 py-1 rounded-lg hover:bg-gray-700 transition"
                                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        >
                                            −
                                        </button>
                                        <span className="text-lg font-semibold">{quantity}</span>
                                        <br />
                                        <button
                                            className="bg-[#CFB484] text-white px-3 py-1 rounded-lg hover:bg-gray-700 transition"
                                            onClick={() => setQuantity(quantity + 1)}
                                        >
                                            +
                                        </button>

                                    </div>
                                </div>
                            </td>

                            <td className="p-4 text-lg font-semibold align-top">1</td>
                            <td className="p-4 text-lg font-semibold align-top">Rs. {totalPrice.toLocaleString()}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Estimated Total */}
            <div className="mt-6 text-right">
                <h3 className="text-xl font-bold text-gray-800">Estimated Total: Rs. {totalPrice.toLocaleString()}</h3>
                <p className="text-sm text-gray-600">Taxes included. Discounts and shipping calculated at checkout.</p>
            </div>

            {/* Checkout Button */}
            <div className="text-center mt-6">
                <button className="bg-[#CFB484] text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-gray-600 transition">
                    Check Out
                </button>
            </div>
        </div>
    );
};

export default CartPage;