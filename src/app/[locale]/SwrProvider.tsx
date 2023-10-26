"use client";
import { Fetcher, SWRConfig } from "swr";
import { ReactNode } from "react";
import request from "@/utils/request";

type Props = {
    children: ReactNode;
};

const fetcher: Fetcher<any> = (url: string) => request.get(url).then((res) => res);
export const SWRProvider = ({ children }: Props) => {
    return (
        <SWRConfig
            value={{
                revalidateOnFocus: false,
                fetcher,
            }}
        >
            {children}
        </SWRConfig>
    );
};
