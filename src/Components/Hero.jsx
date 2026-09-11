import { Link } from "react-router-dom";
import Carrousal from "./Carrousal";
function Hero() {
  return (
    <section className="relative mx-auto my-10 max-w-7xl overflow-hidden rounded-2xl bg-secondary px-6 py-16 sm:px-10 lg:px-16 lg:py-24 flex justify-between">

      {/* Decorative Circle */}
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/10"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-2xl">

        {/* Small Heading */}
        <p className="mb-4 text-sm font-semibold tracking-[0.3em] text-accent">
          NEW COLLECTION
        </p>

        {/* Main Heading */}
        <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-primary sm:text-6xl lg:text-7xl">
          Discover
          <br />
          <span className="text-accent">Your Style</span>
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-lg text-base leading-7 text-muted sm:text-lg">
          Explore our latest collection and find something
          made just for you.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-5">

          <Link to="/shop">
            <button className="rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-accent hover:shadow-lg">
              Shop Now
            </button>
          </Link>

          <Link
            to="/shop"
            className="font-semibold text-primary underline decoration-accent underline-offset-4 transition-colors duration-300 hover:text-accent"
          >
            Explore Collection
          </Link>

        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="relative h-[400px] bottom-0 left-10 w-1/2  text-black bg-accent">
        {/* <img src="https://images2.alphacoders.com/141/thumbbig-1414178.webp" alt="front-img" className="rounded-md" /> */}
        <Carrousal />
      </div>
    </section>
  );
}

export default Hero;
