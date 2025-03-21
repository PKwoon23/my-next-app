/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.pixabay.com',
        },
      ],
      unoptimized: true, // ปิดการใช้งาน Image Optimization
    },
    output: 'export',  // รองรับการ export static site
  };
  
  export default nextConfig;
  