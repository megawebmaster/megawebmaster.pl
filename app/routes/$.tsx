import { Link } from 'react-router';

export const meta = () => {
  return [
    { title: '404 - megawebmaster.pl' },
    {
      name: 'description',
      content: `Sorry, we couldn't find the page you are looking for.`,
    },
  ];
};

export default function Rest() {
  return (
    <div className="w-page mx-auto flex flex-col">
      <div className="my-4 p-8 pt-16 md:my-8 md:p-16">
        <h1 className="text-4xl font-garet pb-12 flex flex-col gap-4 items-center justify-center md:flex-row">
          <span>404</span>
          <span className="hidden md:inline">·</span>
          <span className="text-nowrap">Not Found</span>
        </h1>
        <p className="text-xl text-center mb-4">The page you are looking for is not here.</p>
        <p className="mb-2">You might want to take a look on these pages:</p>
        <ul className="pl-5 list-disc">
          <li className="mb-1">
            <Link to="/">About me</Link>
          </li>
          <li className="mb-1">
            <Link to="/resume">Resume</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
