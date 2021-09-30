import React, { useContext } from "react";
import UserContext from "../context/UserContext.jsx";


const Login = () => {
  const {handleInputChange,login,Token} = useContext(UserContext)

  return (
    <form>
      <label>
        Email:
        <input type="text" name="email" onChange={handleInputChange}/>
      </label>
      <label>
        Password:
        <input type="password" name="password" onChange={handleInputChange}/>
      </label>
      <button type="button" onClick={login}>Login</button>
      {Token?(<div>logado</div>):(<div>aguardando</div>)}
    </form>
  );
};

export default Login;
