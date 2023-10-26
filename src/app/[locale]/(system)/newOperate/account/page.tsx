"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useAppDispatch } from "@/store";
import { setCurrAccountId, setDetailModalVisible } from "@/store/slices/accountSlice";
import { useSearchParams } from "next/navigation";
import type { Fetcher } from "swr";
import useSWR from "swr";
import request from "@/utils/request";
import qs from "qs";
import type { PaginationProps } from "antd";
import { Table, Button } from "antd";
import type { ColumnProps } from "antd/lib/table";

const TABLE_PAGE_SIZE_OPTIONS = ["20", "50", "100"];

interface StatusMap {
    [key: string]: string;
}

const REALNAME_STATUS_MAP: StatusMap = {
    INIT: "未认证",
    SUBMITTED: "已提交",
    FAILED: "失败",
    REJECTED: "失败",
    ACTIVE: "成功",
    SUCCESS: "成功",
    SUSPENDED: "已冻结",
    TERMINATED: "已关闭",
    WAITING_RISK: "风控中",
};

const Page: React.FC = () => {
    const dispatch = useAppDispatch();

    const searchParams = useSearchParams();

    const [scrollHeight, setScrollHeight] = useState<any>();
    const [curPage, setCurPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>();

    const searchQuery = useMemo(
        () => ({
            page: curPage - 1,
            size: pageSize,
        }),
        [curPage, pageSize],
    );

    useEffect(() => {
        setCurPage(Number(searchParams.get("page")) || 1);
        setPageSize(Number(searchParams.get("pageSize") || TABLE_PAGE_SIZE_OPTIONS[0]));
    }, [searchParams]);

    const { data, error, isLoading } = useSWR(`/admin-api/account/admin/v1/accounts?${qs.stringify(searchQuery)}`);

    useSWR(`/testApi/admin/webTest`);

    const onShowDetail = (id: string) => {
        dispatch(setCurrAccountId(id));
        dispatch(setDetailModalVisible(true));
    };

    const columns: ColumnProps<any>[] = [
        {
            title: "ID",
            dataIndex: "id",
            ellipsis: true,
            fixed: "left",
            width: 160,
            render: (text, record) => (
                <Button type="link" onClick={() => onShowDetail(record.id)}>
                    {text}
                </Button>
            ),
        },
        {
            title: "实名",
            dataIndex: ["legal_entity", "name"],
            render: (text) => text,
        },
        {
            title: "邮箱",
            dataIndex: ["legal_entity", "email"],
        },
        {
            title: "手机号",
            dataIndex: ["legal_entity", "phone"],
        },
        {
            title: "状态",
            dataIndex: "status",
            fixed: "right",
            width: 100,
            render: (text) => REALNAME_STATUS_MAP[text] || "未认证",
        },
    ];

    const onPaginationChange: PaginationProps["onShowSizeChange"] = (page, pageSize) => {
        setCurPage(page);
        setPageSize(pageSize);
    };

    return (
        <>
            <Button type="primary" onClick={() => onShowDetail("testId")}>
                测试modal弹窗
            </Button>
            {!isLoading && !error && (
                <div className="ep-content" style={{ height: scrollHeight?.content }}>
                    <Table
                        rowKey="id"
                        id="1"
                        size="small"
                        className="ep-ant-table"
                        columns={columns}
                        loading={isLoading}
                        dataSource={data?.data}
                        pagination={{
                            className: "ep-ant-pagination",
                            showSizeChanger: true,
                            showQuickJumper: true,
                            pageSizeOptions: TABLE_PAGE_SIZE_OPTIONS,
                            total: data?.pagination?.total_elements,
                            current: curPage,
                            pageSize,
                            onChange: onPaginationChange,
                        }}
                        scroll={{ x: 1300, y: scrollHeight?.tableY }}
                    />
                </div>
            )}
        </>
    );
};

export default Page;
