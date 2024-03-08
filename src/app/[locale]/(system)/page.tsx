'use client';
import { RootState, useAppSelector } from '@/store';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/navigation';
import { Button, Calendar } from 'antd';
import useStyles from './style';

export default function Page() {
    const t = useTranslations('Home');

    const router = useRouter();
    const theme = useAppSelector((state: RootState) => state.global.theme);

    const { styles } = useStyles();

    const goToLogin = () => {
        router.push(`/login`);
    };

    const goToRegister = () => {
        router.push(`/register`);
    };

    return (
        <>
            <h2 className={styles.homeTestStyle1}>{t('home')}</h2>
            <h3 className={styles.homeTestStyle2}>
                {t('welcome', {
                    user: 'dyp',
                })}
            </h3>
            <p>当前theme: {theme}</p>
            <p>环境变量: {process.env.ORG}</p>
            <Button type="primary" onClick={goToLogin}>
                跳转登录页
            </Button>
            <Button type="primary" onClick={goToRegister}>
                跳转注册页
            </Button>
            <Calendar fullscreen={false} />
        </>
    );
}
