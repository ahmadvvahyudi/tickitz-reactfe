import { useNavigate } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from "react";

const PrivateRoute = ({children}) =>{
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {isSignIn} = useSelector(state=>state.auth)
    useEffect(()=>{
        if(isSignIn===false){
            if(isSignIn ===true){
                navigate('/',{replace:true})
            }
        }
    }, [isSignIn])
    return (children)
    
}

const PublicRoute = ({children, isRestricted=false}) =>{
    const navigate = useNavigate();
    const {isSignIn} = useSelector(state=>state.auth)
    useEffect(()=>{
        if(isRestricted){
            if(isSignIn===true){
                navigate('/',{replace:true})
            }
        }
    }, [isSignIn])
    return (children)
}

export {PrivateRoute,PublicRoute}