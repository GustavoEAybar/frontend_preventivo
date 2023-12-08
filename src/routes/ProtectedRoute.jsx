import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const token = JSON.parse(localStorage.getItem('user-token')) || null;
    if(!token){
        return <Navigate to={"users/login/"}/>
    }else{
        return children
    }
};
export default ProtectedRoute;