import { createUserWithEmailAndPassword, onAuthStateChanged,  signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {


    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);


    
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
        return updateProfile(auth.currentUser,{
            displayName : name,photoURL : photoURL
        })
    }

    

    const logOut = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unSubsCribe = onAuthStateChanged(auth,currenUser => {
            setUser(currenUser);
            setLoading(false)
            console.log(currenUser)
            // if(currenUser){
            //     sendEmailVerification(currenUser).then(() => {
            //       console.log("Sending Verification EMAIL");
            //     })
            //     .catch(erorr => {
            //         console.log(erorr.message)
            //     })
            // }
        })

        return () => {
            unSubsCribe()
        }
    },[])

    


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