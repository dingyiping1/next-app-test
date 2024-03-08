import { ReactNode } from 'react';
import StoreProvider from '@/provider/StoreProvider';
import NextIntlProvider from '@/provider/NextIntlPrivider';
import { SWRProvider } from '@/provider/SwrProvider';
import StyleRegistry from '@/provider/StyleRegistry';
import { ConfigProvider } from 'antd';
import { locales, Locale } from '@/config';
import config from '@/antd/config';
import { getAntdLocale } from '@/antd/locale';
import { Metadata } from 'next';

type Props = {
    children: ReactNode;
    params: { locale: Locale };
};

export const metadata: Metadata = {
    title: 'EasyPay Admin',
    description: 'EasyPay后台管理系统',
};

export function generateStaticParams() {
    return locales.map((locale: Locale) => ({ locale }));
}

export default function Layout({ children, params: { locale } }: Props) {
    const antdLocale = getAntdLocale(locale);

    return (
        <html lang={locale}>
            <body>
                <StoreProvider>
                    <SWRProvider>
                        <NextIntlProvider>
                            <ConfigProvider {...config} locale={antdLocale}>
                                <StyleRegistry>{children}</StyleRegistry>
                            </ConfigProvider>
                        </NextIntlProvider>
                    </SWRProvider>
                </StoreProvider>
            </body>
        </html>
    );
}
