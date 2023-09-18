/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/old-blog/:path*", // 사용자기 여기로 접근하면
        destination: "/new-blog/:path*", // 여기로 redirect 시켜준다.
        permanent: false,
      },
    ];
  },
  async rewrites() {
    console.log(API_KEY)
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
