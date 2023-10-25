import { createStyles } from "antd-style";

const useStyles = createStyles(({ token, css, prefixCls }) => {
    const commonStyle = {
        borderRadius: `${token.borderRadiusLG}px`,
        padding: `${token.paddingLG}px`,
    };

    return {
        homeTestStyle1: {
            ...commonStyle,
            color: token.colorPrimary,
        },
        homeTestStyle2: {
            marginTop: "50px",
            color: "orange",
        },
    };
});

export default useStyles;
