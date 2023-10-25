"use client";
import { SWRConfig } from "swr";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};
export const SWRProvider = ({ children }: Props) => {
    return (
        <SWRConfig
            value={{
                revalidateOnFocus: false,
            }}
        >
            {children}
        </SWRConfig>
    );
};
