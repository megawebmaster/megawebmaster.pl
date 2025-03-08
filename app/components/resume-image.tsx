export const ResumeImage = () => (
  <div className="image">
    <picture>
      <source type="image/webp" srcSet="/resume.webp, /resume@2x.webp 2x" />
      <source type="image/jpeg" srcSet="/resume.jpg, /resume@2x.jpg 2x" />
      <img
        src="/resume.jpg"
        alt="Picture of Amadeusz"
        className="mx-auto mt-8 mb-2 rounded-full size-40 transition-opacity opacity-0 loaded:opacity-100 duration-300"
      />
    </picture>
  </div>
);
