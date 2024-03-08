import React from 'react';
import type { Metadata } from 'next';

type IProps = {
    children: React.ReactNode;
};

export const metadata: Metadata = {
    title: '资金调拨',
};

const Layout: React.FC<IProps> = ({ children }: IProps) => {
    return children;
};

export default Layout;
