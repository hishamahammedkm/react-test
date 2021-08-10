import { useState} from "react";
import { useDispatch } from 'react-redux';
import { loginUser } from "../store/slices/authSlice";

const Login = () => {
    const dispatch = useDispatch()
   
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    const login = ()=>{
        dispatch(loginUser(email,password))
        setEmail('')
        setPassword('')
    }
    return (
        <div>
            <div>


                <div>
                    <label htmlFor="">Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" name="" id="" />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" name="" id="" />
                </div>
                <button onClick={login}>Login</button>
            </div>
        </div>
    );
};

export default Login;
