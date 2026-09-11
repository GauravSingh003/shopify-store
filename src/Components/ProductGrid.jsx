import products from "../Data/products";
import ProductCard from "./ProductCard";

function ProductGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

      {/* Section Header */}
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Our Collection
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Featured Products
          </h2>
        </div>

        <p className="hidden text-sm text-muted sm:block">
          {products.length} Products
        </p>
      </div>

      {/* Products */}
      {products.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-border bg-secondary py-16 text-center">
          <p className="text-lg font-semibold text-primary">
            No products available
          </p>

          <p className="mt-2 text-sm text-muted">
            Please check back later.
          </p>
        </div>
      )}

    </section>
  );
}

export default ProductGrid;