import type { Metadata } from "next";
import React from "react";

type IProps = {
    children: React.ReactNode;
};

export const metadata: Metadata = {
    title: "新运营",
};

const Layout: React.FC<IProps> = ({ children }: IProps) => {
    return children;
};

export default Layout;
