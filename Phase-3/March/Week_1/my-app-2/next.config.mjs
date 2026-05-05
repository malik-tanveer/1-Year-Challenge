/** @type {import('next').NextConfig} */
const nextConfig = {
  images : {
    domains : ["img.pikbest.com"]
}
};

export default nextConfig;
 

// This is The Best Pratice to use you
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "**",
//       },
//     ],
//   },
// };

// module.exports = nextConfig;