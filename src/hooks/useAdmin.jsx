import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider/AuthProvider";

const useAdmin = () => {
    const axiosSecure = useAxiosSecure();
    const {user,loading} = useContext(AuthContext)

    const { data: isAdmin,isPending} = useQuery({


      queryKey: [user?.email, "isAdmin"],

      enabled : !loading,

      queryFn: async () => {
            
              if(!loading){

                console.log(user.email)
                
                const res = await axiosSecure.get(
                  `/public/admin/${user.email}`
                );

                return res.data?.isAdmin;
              
              }
      }
    });

    return [isAdmin,isPending]
};

export default useAdmin;