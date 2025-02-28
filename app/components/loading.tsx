import { LoaderCircleIcon } from 'lucide-react';

export const Loading = () => (
  <div className="mx-8 my-4 flex gap-2 items-center justify-center">
    <LoaderCircleIcon className="animate-spin" />
    <span>Loading...</span>
  </div>
);
