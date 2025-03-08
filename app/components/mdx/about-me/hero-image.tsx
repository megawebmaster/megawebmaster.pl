export const HeroImage = () => (
  <div className="absolute top-6 right-0 z-0">
    <picture>
      <source type="image/webp" srcSet="/amadeusz.webp, /amadeusz@2x.webp 2x" />
      <source type="image/png" srcSet="/amadeusz.png, /amadeusz@2x.png 2x" />
      <img src="/amadeusz.png" alt="Amadeusz's picture" className="block hero-image" />
    </picture>
  </div>
);
