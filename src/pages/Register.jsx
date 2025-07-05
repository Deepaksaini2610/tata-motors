import React, { useState } from 'react'
import './Register.css'
import { auth } from '../Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';



const Register = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword ] = useState('')
  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("User Created");
    } catch (error) {
      console.error(error.message);
      alert("Error creating user");
    }
  };
    
  return (
    <div className="registercontainer">
      <form className="registerform">
        <div>
          username
          <input
            type="text"
            placeholder="enter username"
            className="registerusername"
          />
        </div>
        <div>
          email
          <input
            type="email"
            placeholder="enter email"
            className="registeremail"
            value={email}
            onChange={(e) =>
              setEmail(() => {
                e.target.value;
              })
            }
          />
        </div>
        <div>
          password
          <input
            type="password"
            placeholder="enter password"
            className="registerpassword"
            value={email}
            onChange={(e) =>
              setPassword(() => {
                e.target.value;
              })
            }
          />
        </div>
        <div>
          confirm password
          <input
            type="password"
            placeholder="enter confirm password"
            className="registcpassword"
          />
        </div>
        <div className="registerbtn">
          <button onClick={handleSignUp}>Register</button>
          do you have an account ? please login
          <button>Login</button>
        </div>
      </form>
    </div>
  );
}

export default Register