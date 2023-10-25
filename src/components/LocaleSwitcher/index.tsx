"use client";

import { useTransition } from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next-intl/client";
import { Select } from "antd";
import type { Locales } from "@/utils/locales";
import { locales } from "@/utils/locales";

const options = locales.map((locale: Locales) => ({
    value: locale,
    label: locale,
}));
export default function LocaleSwitcher() {
    const [isPending, startTransition] = useTransition();
    const locale = useLocale();
    const pathname = usePathname();
    const router = useRouter();

    const changeLang = (value: string) => {
        startTransition(() => {
            router.replace(pathname, { locale: value });
        });
    };

    return (
        <Select value={locale} style={{ width: 120 }} disabled={isPending} onChange={changeLang} options={options} />
    );
}
