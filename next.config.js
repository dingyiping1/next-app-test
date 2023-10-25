/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        ORG: "heliumos",
    },
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: "/:locale/newOperate",
                destination: "/:locale/newOperate/account",
                permanent: true,
            },
            {
                source: "/:locale/fundTransfer",
                destination: "/:locale/fundTransfer/allocation",
                permanent: true,
            },
        ];
    },
    async rewrites() {
        return [
            {
                source: "/:locale/:path*",
                destination: "/:locale/login",
            },
            {
                source: "/:locale/admin-api/account/:path*",
                destination: "http://account.testinner.easypayx.com/:path*",
            },
        ];
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
        // Important: return the modified config
        return config;
    },
};

module.exports = nextConfig;
