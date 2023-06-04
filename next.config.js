/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
                port: "",
                pathname: `/${process.env.CLOUDINARY_CLOUD_NAME}/**`
            }
        ]
    }
};

module.exports = nextConfig;
