import { Navigate } from "react-router-dom";
import { AccessCheck } from "../../services/storage";

const ProtectedRoute = ({ children, redirectPath = '/entry'/*, isAllowed*/ }) => {

    const isAllowed = AccessCheck();

    if (isAllowed === false) {
        return <Navigate to={redirectPath} replase = {true} />
    }
        return children;
}

export default ProtectedRoute;