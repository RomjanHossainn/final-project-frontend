import { useContext } from "react";
import { FaGoogle } from "react-icons/fa6";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SocialLogin = () => {

    const navigateHome = useNavigate()

    const {googleSignUp} = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()

    const handleGoogle = () => {
        googleSignUp()
        .then(result => {
            console.log(result.user)

            const user = {
                name : result.user.displayName,
                email : result.user.email
            }

            axiosPublic.post('/publicinfo',user)
            .then(result => {
                console.log(result.data)
            })

            navigateHome('/')
        })
        .catch(erorr => {
            console.log(erorr.message)
        })
    }

    return (
      <div>
        <button onClick={handleGoogle} className="btn mt-3">
          <FaGoogle></FaGoogle>
          <p>Google</p>
        </button>
      </div>
    );
};

export default SocialLogin;