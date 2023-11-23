import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useAdmin from "../../hooks/useAdmin";
import { Navigate, useLocation } from "react-router-dom";

const AdminPrivet = ({children}) => {
   const {user,loading} = useContext(AuthContext);
   const [isAdmin,isPending] = useAdmin();
    const location = useLocation()

   if(loading || isPending){
    return 'loading.....'
   }

   if(user && isAdmin){
    return children;
   }

   return <Navigate state={location.pathname} to={'/login'}></Navigate>

};

export default AdminPrivet;