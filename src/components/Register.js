import { useState,useDispatch } from "react";
import { registerUser } from "../store/slices/authSlice";
const Register = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  
  const register = ()=>{
    dispatch(registerUser(email, password, name, phone))
    setEmail('')
    setPassword('')
    setName('')
    setPhone('')
  }
  return (
    <div>
      <div>
        <div>
          <label htmlFor="">Name</label>
          <input onChange={(e)=>setName(e.target.value)} type="text" name="" id="" />
        </div>
        <div>
          <label htmlFor="">Phone</label>
          <input onChange={(e)=>setPhone(e.target.value)} type="number" name="" id="" />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input onChange={(e)=>setEmail(e.target.value)} type="email" name="" id="" />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input onChange={(e)=>setPassword(e.target.value)} type="password" name="" id="" />
        </div>
        <button onClick={register}>Register</button>
      </div>
    </div>
  );
};

export default Register;
