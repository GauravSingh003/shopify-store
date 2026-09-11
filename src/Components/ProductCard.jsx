import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Sale / New Badge */}
        <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold tracking-wide text-white">
          NEW
        </span>
      </div>

      {/* Product Details */}
      <div className="p-5">

        <h3 className="truncate text-lg font-semibold text-primary transition-colors duration-300 group-hover:text-accent">
          {product.name}
        </h3>

        <p className="mt-2 text-xl font-bold text-accent">
          ₹{product.price}
        </p>

        <Link
          to={`/product/${product.id}`}
          className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-green-500 transition-all duration-300 hover:bg-gray-100 hover:shadow-md"
        >
          View Product
        </Link>

      </div>
    </article>
  );
}

export default ProductCard;