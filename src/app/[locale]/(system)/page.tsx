"use client";
import { RootState, useAppSelector } from "@/store";
import { useTranslations } from "next-intl";
import { Button, Calendar } from "antd";
import useStyles from "./style";

export default function Page() {
    const theme = useAppSelector((state: RootState) => state.global.theme);
    const { styles } = useStyles();
    const t = useTranslations();

    return (
        <>
            <h2 className={styles.homeTestStyle1}>{t("home")}</h2>
            <h3 className={styles.homeTestStyle2}>
                {t("welcome", {
                    user: "dyp",
                })}
            </h3>
            <p>当前theme: {theme}</p>
            <p>环境变量: {process.env.ORG}</p>
            <Button type="primary">测试按钮</Button>
            <Calendar fullscreen={false} />
        </>
    );
}
