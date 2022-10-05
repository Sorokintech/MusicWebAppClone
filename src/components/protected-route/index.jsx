import { Navigate } from "react-router-dom";

export const ProtectedRoute = (props) => {
    const user = document.cookie;
    
    return user ? props.children : <Navigate to={props.redirectPath}/> 
}
{/* <Route path = {props.path} element={() => {user?props.element :<Navigate to='/login'/>}}/>;
     */}