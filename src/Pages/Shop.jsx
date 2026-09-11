import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import products from "../Data/products";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Shop() {
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem("cart");

      if (savedCart) {
        return JSON.parse(savedCart);
      }

      return [];
    } catch (error) {
      console.log("Cart loading error:", error);
      return [];
    }
  });

  // Save cart
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));

    // Update navbar
    window.dispatchEvent(new Event("cartUpdated"));
  }, [cart]);


  const addToCart = (product) => {
    console.log("Product clicked:", product);

    setCart((oldCart) => {
      const existingProduct = oldCart.find(
        (item) => item.id === product.id
      );

      // Product already exists
      if (existingProduct) {
        console.log("Product already exists");

        return oldCart.map((item) => {
          if (item.id === product.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }

          return item;
        });
      }

      // Product doesn't exist
      console.log("Adding new product");

      return [
        ...oldCart,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          description: product.description,
          quantity: 1,
        },
      ];
    });
  };

  return (
    <div className="min-h-screen bg-white text-black">

      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-10">

        {/* Header */}
        <div className="mb-10">

          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            Explore Our Products
          </p>

          <h1 className="mt-2 text-4xl font-bold text-black">
            Shop
          </h1>

        </div>

        {/* Products */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {products.map((product) => (

            <div
              key={product.id}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
            >

              {/* Product Image */}
              <Link to={`/product/${product.id}`}>

                <div className="h-64 overflow-hidden bg-gray-100">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-300 hover:scale-105"
                  />

                </div>

              </Link>

              {/* Product Info */}
              <div className="p-5">

                <Link to={`/product/${product.id}`}>

                  <h2 className="text-xl font-bold text-black hover:text-gray-600">
                    {product.name}
                  </h2>

                </Link>

                <p className="mt-2 text-lg font-semibold text-black">
                  ₹{product.price}
                </p>

                <p className="mt-2 text-sm text-gray-600">
                  {product.description}
                </p>

                {/* Buttons */}
                <div className="mt-5 flex gap-3">

                  <Link
                    to={`/product/${product.id}`}
                    className="flex-1 rounded-lg border border-black px-4 py-3 text-center text-sm font-semibold text-black hover:bg-gray-100"
                  >
                    View Details
                  </Link>

                  <button
                    type="button"
                    onClick={() => addToCart(product)}
                    className="flex-1 rounded-lg bg-black px-4 py-3 text-sm font-semibold text-white hover:bg-gray-800"
                  >
                    Add To Cart
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </main>

      <Footer />

    </div>
  );
}

export default Shop;