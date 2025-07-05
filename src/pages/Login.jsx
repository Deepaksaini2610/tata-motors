import React, { useState } from 'react'

const Login = () => {

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [email, setEmail] = useState("");


    const handleLogin = (e) => {
        e.preventDefault();
    //   e.prevent.default();
      console.log(email,password);
      setPassword("")
      setEmail("")
    };
  return (
    <div>
      <form className="loginform">
        <label>username or email</label>
        <input
          type="text"
          placeholder="enter username or email"
          className="useremailinput"
          value={email}
          onChange={(e) => {setEmail(e.target.value)}}
        />
        <label>password</label>
        <input
          type="password"
          placeholder="enter password"
          className="loginpassword"
          value={password}
          onChange={(e) => { setPassword(e.target.value)}}
        />
        <div>
          <button onClick={handleLogin}>Login</button>
          don't have an account ? please register
          <button>Register</button>
        </div>
      </form>
    </div>
  );
}

export default Login