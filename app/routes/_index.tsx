import type { Route } from './+types/_index';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'About me - megawebmaster.pl' },
    // { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Index() {
  return (
    <div className="max-w-100 mx-auto my-4 text-center">
      <h1 className="font-garet text-4xl pb-4">Welcome!</h1>
      <p>Initial commit for the home page.</p>
    </div>
  );
}
