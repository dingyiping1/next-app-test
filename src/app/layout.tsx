import { ReactNode } from 'react';
import 'antd/dist/reset.css';
import './globals.css';
import '@/antd/antd.css';

type Props = {
    children: ReactNode;
};

export default function RootLayout({ children }: Props) {
    return children;
}
