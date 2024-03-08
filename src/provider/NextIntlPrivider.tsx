import { ReactNode } from 'react';
import { NextIntlClientProvider, useMessages } from 'next-intl';

type Props = {
    children: ReactNode;
};

export default function NextIntlProvider({ children }: Props) {
    const messages = useMessages();

    return <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>;
}
