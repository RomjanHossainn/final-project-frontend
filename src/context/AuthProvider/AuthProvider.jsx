import { createUserWithEmailAndPassword, onAuthStateChanged,  signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from "../../hooks/useAxiosPublic";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {


    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const axiosPublic = useAxiosPublic()
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signInUser = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    

    const googleSignUp = () => {
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }

    const updateUserProfile = (name,photoURL) => {
        setLoading(true)
        return updateProfile(auth.currentUser,{
            displayName : name,photoURL : photoURL
        })
    }

    

    

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    useEffect(() => {
        const unSubsCribe = onAuthStateChanged(auth,currenUser => {
            setUser(currenUser);
            if(currenUser){
                    axiosPublic
                      .post("/jwt", { email: currenUser?.email })
                      .then((res) => {
                        if (res.data.token) {
                          localStorage.setItem("ACCESS_TOKEN", res.data.token);
                          setLoading(false);
                        }
                      });
                
            }else{
                localStorage.removeItem("ACCESS_TOKEN");
                setLoading(false)
            }
        })

        return () => {
            unSubsCribe()
            
        }
    },[axiosPublic])


    
    

    const authInfo = {
      user,
      loading,
      logOut,
      createUser,
      signInUser,
      updateUserProfile,
      googleSignUp,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};





export default AuthProvider;