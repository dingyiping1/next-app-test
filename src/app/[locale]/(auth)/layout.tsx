import { ReactNode } from "react";
export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <p>auth layout</p>
            {children}
        </>
    );
}
