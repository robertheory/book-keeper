export const isDevelop = process.env.NODE_ENV === 'development';

const protocolByEnv = isDevelop ? 'http' : 'https';

export const siteURL = `${protocolByEnv}://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
