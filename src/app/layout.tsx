import { ReactNode } from "react";
import { Metadata } from "next";
import "antd/dist/reset.css";
import "./globals.css";

type Props = {
    children: ReactNode;
};

export const metadata: Metadata = {
    title: "EasyPay Admin",
    description: "EasyPay后台管理系统",
};

export default function RootLayout({ children }: Props) {
    return children;
}
