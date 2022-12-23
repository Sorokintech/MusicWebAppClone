import { Navigate } from "react-router-dom";

export const ProtectedRoute = (props) => {
    const isAuth = !!document.cookie;

    return isAuth === !!props.protected ? props.children : <Navigate to={props.redirectPath}/> 
}
{/* <Route path = {props.path} element={() => {user?props.element :<Navigate to='/login'/>}}/>;
     */}