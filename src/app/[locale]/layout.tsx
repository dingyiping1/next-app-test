import { ReactNode } from "react";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { Inter } from "next/font/google";
import StyleRegistry from "@/components/StyleRegistry";
import { ConfigProvider } from "antd";
import type { Locale } from "antd/es/locale";
import { locales } from "@/utils/locales";
import type { Locales } from "@/utils/locales";
import StoreProvider from "@/app/[locale]/StoreProvider";
import { SWRProvider } from "@/app/[locale]/SwrProvider";

const inter = Inter({ subsets: ["latin"] });

type Props = {
    children: ReactNode;
    params: { locale: Locales };
};

interface LocalesResult {
    locale: Locales;
    messages: any;
    antdLocale: Locale;
}

const antdLocaleMap = {
    zh: "zh_CN",
    en: "en_US",
};

function getLocales(locale: Locales): LocalesResult {
    return {
        locale,
        messages: require(`../../../messages/${locale}.json`),
        antdLocale: require(`antd/locale/${antdLocaleMap[locale]}`).default,
    };
}

export function generateStaticParams() {
    return locales.map((locale: Locales) => ({ locale }));
}
export const metadata: Metadata = {
    title: "EasyPay Admin",
    description: "EasyPay后台管理系统",
};

export default async function Layout({ children, params: { locale } }: Props) {
    const locales = getLocales(locale);

    console.log('husky test1')

    return (
        <html lang={locale}>
            <body className={inter.className}>
                <StoreProvider>
                    <SWRProvider>
                        <NextIntlClientProvider locale={locale} messages={locales.messages}>
                            <ConfigProvider
                                theme={{
                                    token: {
                                        colorPrimary: "green",
                                    },
                                    components: {
                                        Button: {
                                            colorPrimary: "red",
                                        },
                                        Select: {
                                            colorBorder: "yellow",
                                        },
                                    },
                                }}
                                locale={locales.antdLocale}
                            >
                                <StyleRegistry>{children}</StyleRegistry>
                            </ConfigProvider>
                        </NextIntlClientProvider>
                    </SWRProvider>
                </StoreProvider>
            </body>
        </html>
    );
}
