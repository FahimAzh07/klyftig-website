import React from "react";
import products from "../data/productData"; // your products data

export default function Cart({ isOpen, setIsOpen }) {
  // Create demo cartItems from the first 2 products, with quantity 1
  const cartItems = products.slice(0, 2).map((item) => ({
    ...item,
    quantity: 1,
    numericPrice: parseFloat(item.price.replace("RM", "").trim()), // convert to number
  }));

  const total = cartItems.reduce(
    (sum, item) => sum + item.numericPrice * item.quantity,
    0
  );

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-opacity-30 z-30 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-20 right-0 w-80 max-w-full h-[calc(100vh-5rem)] bg-white shadow-2xl transform transition-transform z-40 overflow-y-auto ${
            isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-bold">Your Cart</h2>
          <button onClick={() => setIsOpen(false)} className="text-xl">
            ❌
          </button>
        </div>

        <div className="p-4 flex flex-col gap-4 overflow-y-auto max-h-[70vh]">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4 border-b pb-2">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded object-contain"
              />
              <div className="flex-1">
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-sm text-gray-500">
                  RM {item.numericPrice.toFixed(2)} x {item.quantity}
                </p>
              </div>
              <button className="text-red-500 text-lg">🗑️</button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 border-t mt-auto">
          <div className="flex justify-between font-semibold mb-3">
            <span>Total:</span>
            <span>RM {total.toFixed(2)}</span>
          </div>
          <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}
