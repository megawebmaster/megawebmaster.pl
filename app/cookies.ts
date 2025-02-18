import { createCookie } from 'react-router';

export const theme = createCookie('theme', { maxAge: 12 * 60 * 60 });
