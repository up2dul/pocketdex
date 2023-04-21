// @ts-check

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.pokemondb.net',
        port: '',
        pathname: '/artwork/large/**',
      },
    ],
  },
  assetPrefix: './',
};
export default config;
