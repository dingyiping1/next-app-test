"use client";

import { RootState, useAppSelector, useAppDispatch } from "@/store";
import { setDetailModalVisible } from "@/store/slices/accountSlice";
import { Drawer } from "antd";

export default function Page() {
    const dispatch = useAppDispatch();
    const detailModalVisible = useAppSelector((state: RootState) => state.account.detailModalVisible);
    const currAccountId = useAppSelector((state: RootState) => state.account.currAccountId);

    const onClose = () => {
        dispatch(setDetailModalVisible(false));
    };
    return (
        <Drawer title="账户详情" placement="right" onClose={onClose} open={detailModalVisible}>
            <p>当前查看的账户id: {currAccountId}</p>
        </Drawer>
    );
}
