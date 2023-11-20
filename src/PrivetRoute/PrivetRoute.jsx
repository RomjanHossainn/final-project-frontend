import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({children}) => {

    const location = useLocation()

    const {loading,user} = useContext(AuthContext)
    if(loading){
        return (
          <>
            <span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-lg"></span>
          </>
        );
    }

    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to="/login" replace></Navigate>

};

export default PrivetRoute;