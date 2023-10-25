"use client";

import React, { useState, useEffect } from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next-intl/client";
import { LaptopOutlined, NotificationOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
import LocaleSwitcher from "@/components/LocaleSwitcher";

const { Header, Content, Footer, Sider } = Layout;

const items1: MenuProps["items"] = [
    {
        key: "newOperate",
        label: "新运营",
    },
    {
        key: "fundTransfer",
        label: "资金调拨",
    },
];

const newOperateMenu: MenuProps["items"] = [
    {
        key: "account",
        icon: <LaptopOutlined />,
        label: "账户管理",
    },
];

const fundTransferMenu: MenuProps["items"] = [
    {
        key: "allocation",
        icon: <NotificationOutlined />,
        label: "资金调拨",
    },
    {
        key: "cnyCash",
        icon: <UserOutlined />,
        label: "CNY 头寸预估",
    },
];

const menuMap = {
    newOperate: newOperateMenu,
    fundTransfer: fundTransferMenu,
};

type IProps = {
    children: React.ReactNode;
};

const WrapperLayout: React.FC<IProps> = ({ children }: IProps) => {
    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale();

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const [currentNav, setCurrentNav] = useState("");
    const [leftMenu, setLeftMenu] = useState<MenuProps["items"]>([]);
    const [currentMenu, setCurrentMenu] = useState("");

    useEffect(() => {
        const pathArr = pathname.split("/").filter((item) => !!item.trim());
        const [currentNav, currentMenu] = pathArr;
        setCurrentNav(currentNav);
        setCurrentMenu(currentMenu);
    }, [pathname]);

    useEffect(() => {
        setLeftMenu(menuMap[currentNav] || []);
    }, [currentNav]);

    const onNavMenuClick: MenuProps["onClick"] = ({ key }) => {
        router.push(`/${key}`, { locale });
    };

    const onLeftMenuClick: MenuProps["onClick"] = ({ key }) => {
        router.push(`/${currentNav}/${key}`, { locale });
    };

    return (
        <Layout>
            <Header style={{ display: "flex", alignItems: "center" }}>
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    selectedKeys={[currentNav]}
                    items={items1}
                    onClick={onNavMenuClick}
                />
                <LocaleSwitcher />
            </Header>
            <Content style={{ margin: "30px 0", padding: "0 50px" }}>
                <Layout style={{ padding: "24px 0", background: colorBgContainer }}>
                    <Sider style={{ background: colorBgContainer }} width={200}>
                        <Menu
                            mode="inline"
                            selectedKeys={[currentMenu]}
                            style={{ height: "100%" }}
                            items={leftMenu}
                            onClick={onLeftMenuClick}
                        />
                    </Sider>
                    <Content style={{ padding: "0 24px", minHeight: 280 }}>{children}</Content>
                </Layout>
            </Content>
            <Footer style={{ textAlign: "center" }}>Ant Design ©2023 Created by Ant UED</Footer>
        </Layout>
    );
};

export default WrapperLayout;
