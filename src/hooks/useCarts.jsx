import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider/AuthProvider";

const useCarts = () => {
    const {user} = useContext(AuthContext);
    const {data = [],refetch,isLoading} = useQuery({
        queryKey : ['carts',user?.email],
        queryFn : async() => {
            const cartsData = await axiosSecure.get(`/carts?email=${user.email}`);
            return cartsData.data;
        }
    })

    return [data,refetch,isLoading]
};

export default useCarts;