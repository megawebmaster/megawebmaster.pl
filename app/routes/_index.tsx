import type { Route } from './+types/_index';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'About me - megawebmaster.pl' },
    {
      name: 'description',
      content: `
        I'm Amadeusz and I'm a product engineer.
        Tinkering in the web since 2004, building products since 2019.
        Learn more about me on my home page!
      `,
    },
  ];
}

export default function Index() {
  return (
    <div className="w-page mx-auto flex flex-col my-4">
      <div className="relative">
        <div className="absolute top-0 right-0 z-0">
          <picture>
            <source type="image/webp" srcSet="/amadeusz.webp, /amadeusz@2x.webp 2x" />
            <source type="image/png" srcSet="/amadeusz.png, /amadeusz@2x.png 2x" />
            <img src="/amadeusz.png" alt="Amadeusz's picture" className="block hero-image"/>
          </picture>
        </div>
        <div className="relative z-10 my-4 p-8 pt-56 md:my-8 md:p-16 md:pr-52">
          <div className="flex flex-col gap-4 pb-8 text-foreground md:flex-row md:items-end md:pb-12">
            <h1 className="font-garet text-4xl">Hey there! 👋</h1>
            <h2 className="font-garet text-3xl">I'm Amadeusz.</h2>
          </div>
          <div className="flex flex-col gap-4 md:pr-24">
            <p>
              I'm tinkering with the web since 2004 - the moment I got my first internet connection. Nowadays I'm more
              focused on building products that deliver value to people around the world.
            </p>
            <p>
              I'm truly passionate about creating great products and making the world a better place, one step at a
              time. I want to grow in a product-focused way, so that I can help people around the world live a more
              fulfilling life.
            </p>
            <p>
              Always curious, always eager to learn more, always looking for improvements with constant drive for growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
