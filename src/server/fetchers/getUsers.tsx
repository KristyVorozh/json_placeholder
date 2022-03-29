import axiosInstance from "../axios";

export const getUsersList = async () => {
    return (await axiosInstance.get('https://jsonplaceholder.typicode.com/users')).data;
}