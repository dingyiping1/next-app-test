import { Locale } from '@/config';
import { Locale as AntdLocale } from 'antd/es/locale';

type AntdLocaleMap = {
    [key in Locale]: string;
};
export const antdLocaleMap: AntdLocaleMap = {
    zh: 'zh_CN',
    en: 'en_US',
};
export function getAntdLocale(locale: Locale): AntdLocale {
    return require(`antd/locale/${antdLocaleMap[locale]}`).default;
}
