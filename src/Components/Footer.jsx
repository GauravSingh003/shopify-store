function Footer() {
  return (
    <footer className="mt-16 bg-primary text-black">

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold tracking-wider">
            SHOPIFY STORE
          </h2>

          <p className="mt-4 max-w-xs text-sm leading-6 text-black/60">
            Discover quality products, timeless styles, and everything
            you need to complete your look.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-black">
            Quick Links
          </h3>

          <div className="mt-4 flex flex-col gap-3 text-sm text-black/60">
            <a
              href="/"
              className="transition-colors hover:text-accent"
            >
              Home
            </a>

            <a
              href="/shop"
              className="transition-colors hover:text-accent"
            >
              Shop
            </a>

            <a
              href="/cart"
              className="transition-colors hover:text-accent"
            >
              Cart
            </a>
          </div>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="font-semibold text-black">
            Customer Service
          </h3>

          <div className="mt-4 flex flex-col gap-3 text-sm text-black/60">
            <a
              href="#"
              className="transition-colors hover:text-accent"
            >
              Contact Us
            </a>

            <a
              href="#"
              className="transition-colors hover:text-accent"
            >
              Shipping
            </a>

            <a
              href="#"
              className="transition-colors hover:text-accent"
            >
              Returns
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold text-black">
            Stay Updated
          </h3>

          <p className="mt-4 text-sm leading-6 text-black/60">
            Subscribe to get updates about new products and special
            offers.
          </p>

          <div className="mt-4 flex">
            <input
              type="email"
              placeholder="Your email"
              className="min-w-0 flex-1 rounded-l-lg border border-black/10 bg-black/10 px-4 py-2 text-sm text-black outline-none placeholder:text-black/40 focus:border-accent"
            />

            <button className="rounded-r-lg bg-accent px-4 py-2 text-sm font-semibold transition-colors hover:bg-green-600 hover:text-white">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-black/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-sm text-black/50 sm:flex-row lg:px-8">
          <p>
            © 2026 Shopify Store. All rights reserved.
          </p>

          <p>
            Made with ❤️ for fashion lovers
          </p>
        </div>
      </div>

    </footer>
  );
}

export default Footer;