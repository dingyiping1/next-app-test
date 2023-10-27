import { createStyles } from "antd-style";

const useStyles = createStyles(({ token, css, prefixCls }) => {
    const commonStyle = {
        borderRadius: `${token.borderRadiusLG}px`,
        padding: `${token.paddingLG}px`,
    };

    return {
        // 支持 css object 的写法
        homeTestStyle1: {
            ...commonStyle,
            color: token.colorPrimary,
        },
        homeTestStyle2: {
            marginTop: "50px",
            color: "orange",
        },
        // 也支持通过 css 字符串模板获得和 普通 css 一致的书写体验
        homeTestStyle3: css`
            margin-top: ${token.padding}px;
            color: orange;
        `,
    };
});

export default useStyles;
