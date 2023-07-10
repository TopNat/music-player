import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, redirectPath = '/entry'/*, isAllowed*/ }) => {

    const isAllowed = localStorage.getItem('user');

if (!isAllowed) {
    return <Navigate to={redirectPath} replase = {true} />
}
    return children;
}

export default ProtectedRoute;