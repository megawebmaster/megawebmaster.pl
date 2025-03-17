import type { ReactNode } from 'react';

export default ({ children }: { children: ReactNode }) => <p className="my-3 first:mt-0 last:mb-0">{children}</p>;
