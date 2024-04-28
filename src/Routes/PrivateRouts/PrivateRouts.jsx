import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import { CgSpinner } from "react-icons/cg";



const PrivateRouts = ({children}) => {
    const { user, loading } = useAuth() || {};
    const location = useLocation();

    if (loading) {
        return <CgSpinner/>
    }
    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to={`/login`} replace />
};

export default PrivateRouts;