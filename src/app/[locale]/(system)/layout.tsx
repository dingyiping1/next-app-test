import React from 'react';
import { Locale } from '@/config';
import WrapperLayout from './WrapperLayout';

type IProps = {
    children: React.ReactNode;
    params: { locale: Locale };
};

const SystemLayout: React.FC<IProps> = ({ children, params: { locale } }: IProps) => {
    return <WrapperLayout>{children}</WrapperLayout>;
};

export default SystemLayout;
