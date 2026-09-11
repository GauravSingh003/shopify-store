import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import ProductGrid from "../Components/ProductGrid";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

function Home() {
  const categories = [
    {
      name: "Men",
      description: "Explore men's fashion",
      emoji: "👔",
    },
    {
      name: "Women",
      description: "Discover women's style",
      emoji: "👗",
    },
    {
      name: "Shoes",
      description: "Step into something new",
      emoji: "👟",
    },
    {
      name: "Accessories",
      description: "Complete your look",
      emoji: "👜",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-text">
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Shop By Category */}
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Explore
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Shop By Category
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-muted">
              Find exactly what you're looking for from our carefully
              selected collections.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {categories.map((category) => (
              <Link
                key={category.name}
                to="/shop"
                className="group rounded-2xl border border-border bg-white p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-accent hover:shadow-lg"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-3xl transition-transform duration-300 group-hover:scale-110">
                  {category.emoji}
                </div>

                <h3 className="text-lg font-bold text-primary transition-colors duration-300 group-hover:text-accent">
                  {category.name}
                </h3>

                <p className="mt-1 text-sm text-muted">
                  {category.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section className="bg-secondary/40">
          <ProductGrid />
        </section>

        {/* Special Offer */}
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-primary px-6 py-14 text-center sm:px-12">
            
            {/* Decorative Circles */}
            <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-accent/20" />
            <div className="absolute -bottom-20 -right-10 h-52 w-52 rounded-full bg-accent/20" />

            <div className="relative z-10">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
                Limited Time
              </p>

              <h2 className="text-3xl font-bold text-black sm:text-4xl">
                Special Offer
              </h2>

              <p className="mt-3 text-2xl font-semibold text-black">
                Get up to <span className="text-accent">40% off</span>
              </p>

              <p className="mx-auto mt-3 max-w-md text-sm text-black/70">
                Upgrade your wardrobe with our latest collection at
                exclusive prices.
              </p>

              <Link
                to="/shop"
                className="mt-7 inline-block rounded-lg bg-accent px-7 py-3 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-primary hover:shadow-lg"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;