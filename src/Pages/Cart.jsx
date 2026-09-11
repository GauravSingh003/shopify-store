import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Cart() {
  // Load cart from localStorage
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem("cart");

      if (!savedCart) {
        return [];
      }

      const parsedCart = JSON.parse(savedCart);

      return parsedCart.map((item) => ({
        ...item,
        quantity: Number(item.quantity) || 1,
      }));
    } catch (error) {
      console.error("Error loading cart:", error);
      return [];
    }
  });

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));

    // Tell Navbar that cart has changed
    window.dispatchEvent(new Event("cartUpdated"));
  }, [cart]);

  // Increase quantity
  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove item
  const removeItem = (id) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== id)
    );
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
  };

  // Calculate total price
  const totalPrice = cart.reduce(
    (total, item) =>
      total +
      (Number(item.price) || 0) *
        (Number(item.quantity) || 0),
    0
  );

  return (
    <div className="min-h-screen bg-white text-black">

      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-600">
            Your Shopping Bag
          </p>

          <h1 className="mt-2 text-4xl font-bold text-black">
            Shopping Cart
          </h1>
        </div>

        {/* Empty Cart */}
        {cart.length === 0 ? (
          <div className="rounded-2xl border border-gray-200 bg-white px-6 py-20 text-center shadow-sm">

            <div className="text-5xl">
              🛒
            </div>

            <h2 className="mt-5 text-2xl font-bold text-black">
              Your cart is empty
            </h2>

            <p className="mt-2 text-gray-600">
              Looks like you haven't added anything to your cart yet.
            </p>

            <Link
              to="/shop"
              className="mt-7 inline-block rounded-lg bg-black px-7 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-gray-800"
            >
              Start Shopping
            </Link>

          </div>
        ) : (

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

            {/* ================= CART ITEMS ================= */}
            <div className="space-y-4 lg:col-span-2">

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-5 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center"
                >

                  {/* Image */}
                  <div className="h-32 w-full overflow-hidden rounded-xl bg-gray-100 sm:h-28 sm:w-28 sm:flex-shrink-0">

                    <img
                      src={item.image}
                      alt={item.name || "Product"}
                      className="h-full w-full object-cover"
                    />

                  </div>

                  {/* Product Info */}
                  <div className="flex-1">

                    <h3 className="text-lg font-bold text-black">
                      {item.name}
                    </h3>

                    <p className="mt-1 text-lg font-semibold text-gray-800">
                      ₹{Number(item.price) || 0}
                    </p>

                    {/* Quantity */}
                    <div className="mt-4 flex items-center gap-3">

                      <button
                        type="button"
                        onClick={() =>
                          decreaseQuantity(item.id)
                        }
                        className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-300 text-lg font-semibold text-black transition-colors hover:bg-gray-100"
                      >
                        −
                      </button>

                      <span className="min-w-6 text-center font-semibold text-black">
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          increaseQuantity(item.id)
                        }
                        className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-300 text-lg font-semibold text-black transition-colors hover:bg-gray-100"
                      >
                        +
                      </button>

                    </div>

                  </div>

                  {/* Price + Remove */}
                  <div className="flex items-center justify-between sm:flex-col sm:items-end sm:gap-6">

                    <p className="text-lg font-bold text-black">
                      ₹
                      {(Number(item.price) || 0) *
                        item.quantity}
                    </p>

                    <button
                      type="button"
                      onClick={() =>
                        removeItem(item.id)
                      }
                      className="text-sm font-semibold text-gray-600 transition-colors hover:text-red-600"
                    >
                      Remove
                    </button>

                  </div>

                </div>
              ))}

              {/* Clear Cart */}
              <button
                type="button"
                onClick={clearCart}
                className="text-sm font-semibold text-gray-600 underline underline-offset-4 transition-colors hover:text-red-600"
              >
                Clear Cart
              </button>

            </div>

            {/* ================= ORDER SUMMARY ================= */}
            <div className="h-fit rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

              <h2 className="text-xl font-bold text-black">
                Order Summary
              </h2>

              <div className="my-6 h-px bg-gray-200"></div>

              <div className="space-y-4">

                {/* Subtotal */}
                <div className="flex justify-between text-sm">

                  <span className="text-gray-600">
                    Subtotal
                  </span>

                  <span className="font-semibold text-black">
                    ₹{totalPrice}
                  </span>

                </div>

                {/* Shipping */}
                <div className="flex justify-between text-sm">

                  <span className="text-gray-600">
                    Shipping
                  </span>

                  <span className="font-semibold text-black">
                    Free
                  </span>

                </div>

              </div>

              <div className="my-6 h-px bg-gray-200"></div>

              {/* Total */}
              <div className="flex items-center justify-between">

                <span className="text-lg font-bold text-black">
                  Total
                </span>

                <span className="text-2xl font-bold text-black">
                  ₹{totalPrice}
                </span>

              </div>

              {/* Checkout */}
              <button
                type="button"
                className="mt-6 w-full rounded-lg bg-black px-6 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-gray-800 hover:shadow-lg"
              >
                Proceed To Checkout
              </button>

              {/* Continue Shopping */}
              <Link
                to="/shop"
                className="mt-4 block text-center text-sm font-semibold text-black underline underline-offset-4 hover:text-gray-600"
              >
                Continue Shopping
              </Link>

            </div>

          </div>
        )}

      </main>

      <Footer />

    </div>
  );
}

export default Cart;