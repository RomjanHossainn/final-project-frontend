import { useContext} from "react";
import {Link} from "react-router-dom";
import { useForm} from "react-hook-form";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import AppHealmet from "../../Sheard/AppHealmet/AppHealmet";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../Sheard/SocialLogin/SocialLogin";

const Register = () => {

    const axiosPublic = useAxiosPublic()

    const {register,handleSubmit,formState: { errors },} = useForm();

    const {createUser,updateUserProfile} = useContext(AuthContext)
    
    const formSubmit = (data) => {
      
      if(data){
        createUser(data.email,data.password)
        .then(result => {
          const user=  result.user;
          updateUserProfile(data.name,data.photoURL)
          .then(() => {
            console.log('Profile Update Success')

            const publicInfo = {
              name : data.name,
              email : data.email
            }

            axiosPublic.post('/publicinfo',publicInfo)
            .then(res => {
              console.log(res.data)
            })


          })
          .catch(erorr => {
            console.log(erorr.message)
          })
        })

        .catch(erorr => {
          console.log(erorr.message)
        })
      }
    }

    

    const registerOptions = {
      name: { required: "Name is required" },
      email: {
        required: "Email is required",
        pattern: {
          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: "Invalid email address format",
        },
      },
      password: {
        required: "Password is required",

        minLength: {
          value: 8,
          message: "Password must have at least 8 characters",
        },
      },
    };
   

    

    return (
      <>
        <AppHealmet title={"Bistro || Register"}></AppHealmet>
        <section className="text-gray-600 body-font">
          <div className="container justify-center px-5 py-24 mx-auto flex flex-wrap items-center">
            <form onSubmit={handleSubmit(formSubmit)}>
              <div className=" max-w-sm mx-auto bg-gray-100 rounded-lg p-8 flex flex-col   w-full mt-10 md:mt-0">
                <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
                  Register Now
                </h2>
                <div className="relative mb-4">
                  <label
                    htmlFor="full-name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    {...register("name", registerOptions.name)}
                    id="name"
                    name="name"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  {errors?.name && <p>{errors.name.message}</p>}
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    {...register("email", registerOptions.email)}
                    id="email"
                    name="email"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                {errors?.email && <p>{errors.email.message}</p>}
                <div className="relative mb-4">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    {...register("password", registerOptions.password)}
                    id="password"
                    name="password"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  {errors.password && <p>{errors.password.message}</p>}
                </div>
                <div className="relative mb-4">
                  <label htmlFor="" className="leading-7 text-sm text-gray-600">
                    Photo URL
                  </label>
                  <input
                    type="text"
                    {...register("photoURL", registerOptions.photoURL)}
                    id=""
                    name="photoURL"
                    className="w-full mt-3 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  {errors.photoURL && <p>{errors.photoURL.message}</p>}
                </div>
                <button
                  // disabled={disabld}
                  className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  Register
                </button>

                <SocialLogin></SocialLogin>
                
                <p className="text-xs text-gray-500 mt-3">
                  Already have an accoutn,
                  <Link className="text-indigo-600 font-bold" to="/login">
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </section>
      </>
    );
};

export default Register;