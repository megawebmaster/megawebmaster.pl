import type { ReactNode } from 'react';
import { Link } from 'react-router';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedLink } from '@/components/animated-link';
import { cn } from '@/lib/utils';

type ProjectProps = {
  children: ReactNode;
  description?: string;
  image?: string;
  link: string;
  name: string;
};

export function Project({ children, description, image, link, name }: ProjectProps) {
  // TODO: Nicely animate cards when scrolling to them
  return (
    <Card
      className={cn(
        'group relative transition-shadow duration-200 shadow-resume/50 @md:grid @md:grid-cols-5 hover:shadow-md',
        {
          'pt-30 @md:py-0': !!image,
        },
      )}
    >
      {image && (
        <div className="absolute top-0 w-full rounded-tl-xl rounded-tr-xl overflow-hidden @md:static @md:rounded-bl-xl @md:rounded-tr-none @md:col-span-2">
          <picture>
            <source
              type="image/webp"
              srcSet={`/project-screenshots/${image}.webp, /project-screenshots/${image}@2x.webp 2x`}
            />
            <source
              type="image/png"
              srcSet={`/project-screenshots/${image}.png, /project-screenshots/${image}@2x.png 2x`}
            />
            <img
              src={`/project-screenshots/${image}.png`}
              alt={`${name} screenshot`}
              className="w-full h-24 object-cover transition-transform ease-out duration-200 group-hover:scale-110 @md:h-full"
            />
          </picture>
        </div>
      )}
      <div className="@md:py-6 @md:col-span-3">
        <CardHeader>
          <CardTitle>
            <Link to={link} className="hover:underline">
              {name}
            </Link>
          </CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
        <CardContent>
          {children}
          <AnimatedLink to={link}>View project</AnimatedLink>
        </CardContent>
      </div>
    </Card>
  );
}
