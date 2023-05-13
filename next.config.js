/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  experiments: {
    reactRefresh: true,
  },
};

module.exports = nextConfig;

// const nextConfig = {
//   webpack: (config, { isServer }) => {
//     // Fixes npm packages that depend on `fs` module
//     // if (!isServer) {
//     //   config.node = {
//     //     fs: "empty",
//     //   };
//     // }

//     return config;
//   },
// };
// module.exports = nextConfig;
