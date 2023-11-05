import { useState } from "react";
import '../styles/globals.css'
const AuthButton = () => {
    const [mode, setMode] = useState('signin');
  
    const handleClick = () => {
      setMode(mode === 'signup' ? 'login' : 'signup');
    };
  
    return (
      <button className="bg-green-600 w-20 rounded-xl text-white py-2 hover:scale-105 duration-300" onClick={handleClick}>
        {mode === 'signup' ? 'Register' : 'Login'} 
      </button>
    );
  };
  
  export default AuthButton;