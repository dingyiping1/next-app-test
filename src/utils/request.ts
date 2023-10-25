import axios, { isCancel } from "axios";
import { notification } from "antd";

export const errorHandler = (error) => {
    const { response, code, message } = error;
    const { status, data } = response || {};
    let showNotification = true,
        msg = "",
        desc = "";
    if (response && status) {
        // 服务端有响应
        msg = `请求错误 ${status}`;
        switch (status) {
            case 502:
                desc = "网关错误";
                break;
            case 504:
                desc = "网关超时";
                break;
            case 404:
                desc = "Not Found";
                break;
            case 401:
                // 跳转登录页
                showNotification = false;
                break;
            default:
                // 取接口返回错误
                desc = "";
        }
    } else if (isCancel(error)) {
        // 取消请求，请求中断
        showNotification = false;
    } else if (code) {
        msg = "请求错误";
        switch (code) {
            case "ECONNABORTED":
                // 请求超时
                desc = "请求超时";
                break;
            case "ERR_CANCELED":
                // 取消请求，请求中断
                showNotification = false;
                break;
            case "ERR_NETWORK":
                // 网络断开
                desc = "网络连接失败";
                break;
            default:
                // 其他code码错误
                desc = message;
        }
    } else {
        // 其他未知错误
        msg = "请求错误";
        desc = "未知错误";
    }
    showNotification &&
    notification.error({
        message: msg,
        description: desc,
    });
};

const http = axios.create({
    baseURL: "",
    timeout: 10000,
    withCredentials: true, // 跨域请求时是否需要使用凭证
});

// 请求拦截
http.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

// 响应拦截
http.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        errorHandler(error);
        return Promise.reject(error);
    },
);

export default http;
