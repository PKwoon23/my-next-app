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
    // Add the export path if needed
    distDir: 'out', // The default folder for the export is "out"
  };
  
  export default nextConfig;
  