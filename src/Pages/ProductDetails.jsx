import { Link, useParams } from "react-router-dom";
import products from "../Data/products";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-6">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            Oops!
          </p>

          <h2 className="text-3xl font-bold text-primary">
            Product Not Found
          </h2>

          <p className="mt-3 text-muted">
            The product you're looking for doesn't exist.
          </p>

          <Link
            to="/shop"
            className="mt-6 inline-block rounded-lg bg-primary px-6 py-3 font-semibold text-black transition-all duration-300 hover:bg-accent"
          >
            Back To Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background px-4 py-10 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-6xl">

        <div className="mb-8 flex items-center gap-2 text-sm text-muted">
          <Link
            to="/"
            className="transition-colors hover:text-accent"
          >
            Home
          </Link>

          <span>/</span>

          <Link
            to="/shop"
            className="transition-colors hover:text-accent"
          >
            Shop
          </Link>

          <span>/</span>

          <span className="text-text">
            {product.name}
          </span>
        </div>

        <div className="grid overflow-hidden rounded-2xl border border-border bg-white shadow-sm md:grid-cols-2">

          <div className="flex min-h-[400px] items-center justify-center bg-secondary p-6 sm:p-10">
            <img
              src={product.image}
              alt={product.name}
              className="h-full max-h-[550px] w-full object-contain transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-14">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              {product.category}
            </p>white

            <h1 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
              {product.name}
            </h1>

            <div className="mt-6">
              <span className="text-3xl font-bold text-primary">
                ₹{product.price}
              </span>
            </div>

            <div className="my-6 h-px bg-border"></div>

            <p className="leading-7 text-muted">
              Discover the perfect addition to your collection. 
              Designed with style and comfort in mind, this product 
              is a great choice for your everyday look.
            </p>

            {/* Add To Cart */}
            <button
              className="mt-8 w-full rounded-lg bg-primary px-6 py-4 font-semibold text-orange-500 transition-all duration-300 hover:-translate-y-1 hover:bg-accent hover:shadow-lg"
            >
              Add To Cart
            </button>

            <Link
              to="/shop"
              className="mt-4 text-center text-sm font-semibold text-primary underline decoration-accent underline-offset-4 transition-colors hover:text-accent"
            >
              Continue Shopping
            </Link>

          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">

          <div className="rounded-xl border border-border bg-white p-5 text-center">
            <div className="text-2xl">🚚</div>
            <h3 className="mt-2 font-semibold text-primary">
              Fast Delivery
            </h3>
            <p className="mt-1 text-sm text-muted">
              Quick and reliable shipping
            </p>
          </div>

          <div className="rounded-xl border border-border bg-white p-5 text-center">
            <div className="text-2xl">↩️</div>
            <h3 className="mt-2 font-semibold text-primary">
              Easy Returns
            </h3>
            <p className="mt-1 text-sm text-muted">
              Simple return process
            </p>
          </div>

          <div className="rounded-xl border border-border bg-white p-5 text-center">
            <div className="text-2xl">🔒</div>
            <h3 className="mt-2 font-semibold text-primary">
              Secure Payment
            </h3>
            <p className="mt-1 text-sm text-muted">
              Safe and secure checkout
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}

export default ProductDetails;