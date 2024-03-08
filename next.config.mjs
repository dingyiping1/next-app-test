import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    // 自定义环境变量
    env: {
        ORG: "heliumos",
    },
    reactStrictMode: true,
    // 重定向
    async redirects() {
        return [
            {
                source: "/:locale/home",
                destination: "/:locale",
                permanent: true,
            },
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
    // 可以用于接口代理
    async rewrites() {
        return [
            {
                source: "/:locale/admin-api/account/:path*",
                destination: "http://account.testinner.easypayx.com/:path*",
            },
            {
                source: "/:locale/testApi/:path*",
                destination: "https://www.baidu.com",
            },
        ];
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
        // Important: return the modified config
        return config;
    },
};

export default withNextIntl(nextConfig);
