import React from "react";

type IProps = {
    children: React.ReactNode;
    detailModal: React.ReactNode;
};

const Layout: React.FC<IProps> = ({ children, detailModal }: IProps) => {
    return (
        <>
            {children}
            {detailModal}
        </>
    );
};

export default Layout;
