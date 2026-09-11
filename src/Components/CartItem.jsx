function Cartitems({
  item,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
}) {
  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-border bg-white p-4 shadow-sm transition-shadow duration-300 hover:shadow-md sm:flex-row sm:items-center">

      {/* Product Image */}
      <div className="h-32 w-full overflow-hidden rounded-xl bg-secondary sm:h-28 sm:w-28 sm:flex-shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Product Information */}
      <div className="flex-1">

        <h3 className="text-lg font-bold text-primary">
          {item.name}
        </h3>

        {item.category && (
          <p className="mt-1 text-sm text-muted">
            {item.category}
          </p>
        )}

        <p className="mt-2 text-lg font-semibold text-accent">
          ₹{item.price}
        </p>

        {/* Quantity Controls */}
        <div className="mt-4 flex items-center gap-3">

          <button
            onClick={() => decreaseQuantity(item.id)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background text-lg font-semibold text-primary transition-all duration-200 hover:bg-secondary"
          >
            −
          </button>

          <span className="flex h-9 min-w-9 items-center justify-center rounded-lg bg-secondary px-3 font-semibold text-primary">
            {item.quantity}
          </span>

          <button
            onClick={() => increaseQuantity(item.id)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background text-lg font-semibold text-primary transition-all duration-200 hover:bg-secondary"
          >
            +
          </button>

        </div>

      </div>

      {/* Right Side */}
      <div className="flex items-center justify-between sm:flex-col sm:items-end sm:gap-6">

        {/* Total */}
        <p className="text-lg font-bold text-primary">
          ₹{item.price * item.quantity}
        </p>

        {/* Remove */}
        <button
          onClick={() => removeItem(item.id)}
          className="text-sm font-semibold text-muted underline underline-offset-4 transition-colors duration-200 hover:text-accent"
        >
          Remove
        </button>

      </div>

    </div>
  );
}

export default Cartitems;