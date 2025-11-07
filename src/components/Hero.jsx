const Hero = () => {
  return (
    <section
      id="hero"
      className="relative X z-10 min-h-dvh w-full overflow-hidden"
    >
      <div className="noisy" />
      <h1 className="title mt-40 text-8xl leading-none text-center font-modern-negra relative z-20">
        MOJITTO
      </h1>

      <img src="/images/hero-left-leaf.png" alt="leaf" className="left-leaf" />
      <img
        src="/images/hero-right-leaf.png"
        alt="leaf"
        className="right-leaf"
      />

      <div className="container mx-auto absolute left-1/2 -translate-x-1/2 lg:bottom-20 top-auto md:top-[30vh] flex justify-between items-end px-5 z-20 max-w-7xl w-full">
        <div className="flex lg:flex-row flex-col w-full gap-19 justify-between items-center lg:items-end mx-auto">
          <div className="space-y-5 hidden md:block">
            <p className="">Cool. Crisp. Classic.</p>
            <p className="subtitle flex flex-col font-modern-negra text-6xl text-yellow max-w-xl">
              {" "}
              Sip the Spirit <br /> of Summer
            </p>
          </div>
        </div>
        <div className="space-y-5 text-lg lg:max-w-2xs md:max-w-xs w-full text-left">
          <p className="subtitle 2xl:text-start text-center">
            Every cocktail on our menu is a blend of premium ingredients,
            creative flair, and timeless recipes — designed to delight your
            senses.
          </p>
          <a
            href=""
            className="font-semibold opacity-80 2xl:text-start text-center hover:text-yellow block"
          >
            View cocktails
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
