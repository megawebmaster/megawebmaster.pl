export const HeroImage = () => (
  <div className="absolute top-0 opacity-25 right-0 md:-right-1 transition-all delay-300 duration-300 ease-in z-0 md:loaded:-translate-x-2 loaded:opacity-100">
    <picture>
      <source type="image/webp" srcSet="/amadeusz.webp, /amadeusz@2x.webp 2x" />
      <source type="image/png" srcSet="/amadeusz.png, /amadeusz@2x.png 2x" />
      <img src="/amadeusz.png" alt="Amadeusz's picture" className="block hero-image" />
    </picture>
  </div>
);
