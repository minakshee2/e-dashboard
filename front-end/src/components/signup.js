import { useState } from "react";


const SignUp =() =>{
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const collectData = () => console.warn(name,email,password);
  return(
    <div class="register">
      <h1>Register</h1>
      <label htmlFor={name}>Name:
      <input class="inputbox" id="name" type="text" 
       value={name} onChange = {(e) => setName(e.target.value)} placeholder='Enter name'></input>
       </label>
       <label htmlFor={email}>Email:
      <input class="inputbox" type="text" id="email" 
       value={email} onChange = {(e) => setEmail(e.target.value)} placeholder='Enter email'></input>
       </label>
       <label htmlFor={password}>Password:
      <input class="inputbox" type="password" id="password" 
       value={password} onChange = {(e) => setPassword(e.target.value)} placeholder='Enter password'></input>
       </label>
      <button onClick= { collectData } class="button" type="button">Sign Up</button>
    </div>
  )
}


export default SignUp;