import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import AppHealmet from "../../Sheard/AppHealmet/AppHealmet";
const Login = () => {

  const {signInUser} = useContext(AuthContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formSubmit = (data) => {
    console.log(data)
    signInUser(data.email,data.password)
    .then(result => {
      console.log(result.user)
    })
    .catch(erorr => {
      console.log(erorr.message)
    })
  }

  const registerOptions = {
    password: { required: "password is required" },
    email: {required: "Email is required",},
    
  };
     


    return (
      <>
      <AppHealmet title={'Bistro || Login'}></AppHealmet>
        <section className="text-gray-600 body-font">
          <div className="container  px-5 py-24 mx-auto flex flex-wrap items-center   justify-center">
            <form onSubmit={handleSubmit(formSubmit)}>
              <div className=" bg-gray-100 rounded-lg p-8 flex flex-col mx-auto w-full mt-10 md:mt-0">
                <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
                  Login Now
                </h2>
                <div className="relative mb-4">
                  <label className="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", registerOptions.email)}
                    name="email"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  {errors?.email && <p>{errors.email.message}</p>}
                </div>
                <div className="relative mb-4">
                  <label className="leading-7 text-sm text-gray-600">
                    Password
                  </label>
                  <input
                    type="password"
                    {...register("password", registerOptions.password)}
                    id="password"
                    name="password"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  {errors?.password && <p>{errors.password.message}</p>}
                </div>
                <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Login
                </button>
                <p className="text-xs text-gray-500 mt-3 text-center">
                  <p>
                    Already No Account,{" "}
                    <Link to="/register" className="text-indigo-600 font-bold">
                      Register
                    </Link>
                  </p>
                </p>
              </div>
            </form>
          </div>
        </section>
      </>
    );
};

export default Login;