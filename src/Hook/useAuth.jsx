import { useContext } from "react";
import { AuthContext } from "../Context/UserProvider";


const useAuth = () => {
    const all = useContext(AuthContext);
    return all
};

export default useAuth;