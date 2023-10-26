"use client";

import React from "react";
import { Button, Result } from "antd";

export default function NoFound() {
    const goHome = () => {};

    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={
                <Button type="primary" onClick={goHome}>
                    Back Home
                </Button>
            }
        />
    );
}
