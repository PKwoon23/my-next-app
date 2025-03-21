/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.pixabay.com',
        },
      ],
    },
    output: 'export',  // รองรับการ export static site
  };
  
  export default nextConfig;
  