
import axios from 'axios'
import { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';

export const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});


const useAxiosSecure = () => {

    
    const {logOut} = useContext(AuthContext)

    const navigateLogin = useNavigate()

    
     useEffect(() =>{


       axiosSecure.interceptors.request.use(
         (config) => {
           const token = localStorage.getItem("ACCESS_TOKEN");
           config.headers.authorization = `Bearer ${token}`;
           return config;
         },
         (erorr) => {
           return Promise.reject(erorr);
         }
       );

       axiosSecure.interceptors.response.use(
         (response) => {
           return response;
         },
         (erorr) => {
           const errCode = erorr.response.status;
           if (errCode === 401 || errCode === 403) {
             logOut()
               .then(() => {
                 console.log("logout");
               })
               .catch((erorr) => {
                 console.log(erorr);
               });
             navigateLogin("/login");
           }
           console.log(erorr.response);
           return Promise.reject(erorr);
         }
       );
     },[navigateLogin,logOut])

    return axiosSecure;
};

export default useAxiosSecure;