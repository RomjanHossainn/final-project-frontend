import { useContext, useEffect, useRef, useState} from "react";
import { Link } from "react-router-dom";
import {
  loadCaptchaEnginge,
  validateCaptcha,
  LoadCanvasTemplate,
} from "react-simple-captcha";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
const Register = () => {

    const {createUser} = useContext(AuthContext)

    // const [genaret,setGenaret] = useState(false);
    // // const [valid,setValid] = useState('')

    // const [captcha,setCaptcha] = useState('')
    
    const [disabld, setDisabld] = useState(true);
    const captchaRef = useRef(null);
    
    
     const validedCaptcha = () => {
       const value = captchaRef.current.value;
       if (validateCaptcha(value)) {
         setDisabld(false);
       }
    
     };

     
     
     useEffect(() => { 
        loadCaptchaEnginge(6);
     },);

     

    const handleRegister = (e) => {
      e.preventDefault()
      const form = e.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      const capcha = form.capcha.value;

      if (!name && !email && !password) {
        return (alert("ALL Feild Requard"));
      } else if (!name) {
        return alert("Name Plase");
      } else if (!email) {
        return alert("Name email");
      } else if (!password) {
        return alert("Name password");
      } else if (!capcha) {
        return alert("capcha likhen");
      }


      createUser(email,password)
      .then(result => {
        const user = result.user;
        console.log(user)
      })
      .catch(erorr => {
        console.log(erorr.message)
      })
      

    }


    

    


    return (
      <section className="text-gray-600 body-font">
        <div className="container justify-center px-5 py-24 mx-auto flex flex-wrap items-center">
          <form onSubmit={handleRegister}>
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
                  id="name"
                  name="name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
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
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <div>
                  <LoadCanvasTemplate />
                </div>
                <input
                  type="text"
                  ref={captchaRef}
                  id="capcha"
                  name="capcha"
                  className="w-full mt-3 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />

                <button onClick={validedCaptcha} className="btn mt-3">
                  Captcha Valided
                </button>
              </div>
              <button
                disabled={disabld}
                className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Register
              </button>
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
    );
};

export default Register;