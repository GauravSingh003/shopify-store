import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const [cartCount, setCartCount] = useState(0);

  // Calculate cart count
  const getCartCount = () => {
    try {
      const savedCart = localStorage.getItem("cart");

      if (!savedCart) {
        setCartCount(0);
        return;
      }

      const cart = JSON.parse(savedCart);

      if (!Array.isArray(cart)) {
        setCartCount(0);
        return;
      }

      const count = cart.reduce((total, item) => {
        return total + (Number(item.quantity) || 0);
      }, 0);

      setCartCount(count);
    } catch (error) {
      console.error("Cart error:", error);
      setCartCount(0);
    }
  };

  useEffect(() => {
    // Load cart count when Navbar loads
    getCartCount();

    // Listen for cart changes
    const handleCartUpdate = () => {
      getCartCount();
    };

    window.addEventListener("cartUpdated", handleCartUpdate);

    // Cleanup
    return () => {
      window.removeEventListener(
        "cartUpdated",
        handleCartUpdate
      );
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">

      <div className="mx-auto flex h-[70px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* ================= LOGO ================= */}
        <Link
          to="/"
          className="text-xl font-bold tracking-wide text-black"
        >
          SHOPIFY STORE
        </Link>

        {/* ================= NAVIGATION ================= */}
        <div className="flex items-center gap-6">

          {/* Home */}
          <Link
            to="/"
            className="font-medium text-black transition-colors hover:text-gray-500"
          >
            Home
          </Link>

          {/* Shop */}
          <Link
            to="/shop"
            className="font-medium text-black transition-colors hover:text-gray-500"
          >
            Shop
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative flex items-center gap-1 font-medium text-black transition-colors hover:text-gray-500"
          >
            <span>🛒</span>
            <span>Cart</span>

            {/* Cart Badge */}
            {cartCount > 0 && (
              <span className="absolute -right-4 -top-3 flex h-5 min-w-5 items-center justify-center rounded-full bg-black px-1 text-xs font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;
