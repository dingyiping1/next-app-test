import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "@/utils/locales";

export default createMiddleware({
    locales,
    defaultLocale,
    localePrefix: "always",
});

export const config = {
    // Skip all paths that should not be internationalized
    matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
