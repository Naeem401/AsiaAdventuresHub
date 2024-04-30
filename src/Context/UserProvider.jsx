import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import auth from "../firebase/firebase.config";



export const AuthContext = createContext(null);

// fireBase provider
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const updateUserProfile = (obj) => {
        setLoading(true)
        // return updateProfile(auth.currentUser, obj)
        return updateProfile(auth.currentUser, obj)

    }
    
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleSignIn = ()=> {
        setLoading(true);
      return signInWithPopup(auth, googleProvider)
    }
    const gitHubSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, gitHubProvider)
    }

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);

    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("Inner subscribe 4")
            console.log(user)
            setLoading(false)
            setUser(currentUser);
        });
        
        return () => {
            unsubscribe();
        };
    }, []);

    const authInfo = { user,setUser, createUser, updateUserProfile, signInUser, googleSignIn, gitHubSignIn, signOutUser, loading, setLoading };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserProvider;
