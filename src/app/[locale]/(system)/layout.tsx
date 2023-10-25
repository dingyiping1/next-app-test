import React from "react";
import WrapperLayout from "./WrapperLayout";

type IProps = {
    children: React.ReactNode;
};

const SystemLayout: React.FC<IProps> = ({ children }: IProps) => {
    return <WrapperLayout>{children}</WrapperLayout>;
};

export default SystemLayout;
