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
            // {
            //     source: "/en/admin-api/account/:path*",
            //     destination: "http://account.testinner.easypayx.com/:path*",
            // },
            // {
            //     source: "/zh/admin-api/account/:path*",
            //     destination: "http://account.testinner.easypayx.com/:path*",
            // },
            // {
            //     source: "/:locale/admin-api/account/:path*",
            //     destination: "http://account.testinner.easypayx.com/:path*",
            // },
            {
                source: "/:locale/admin-api/account/:path*",
                destination: "https://www.taobao.com",
            },
        ];
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
        // Important: return the modified config
        return config;
    },
};

module.exports = nextConfig;
