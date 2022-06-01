import React, { useState } from "react";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
function App() {
  const [isLogin, setIsLogin] = useState(false);
  const saveHandler = (newUser) => {
    setIsLogin(true);
  };
  const logoutHandler = () => {
    console.log("logout");
    setIsLogin(false);
  };
  return (
    <div>
      {!isLogin && <Login onSave={saveHandler} />}
      {isLogin && <Home onLogOut={logoutHandler} />}
    </div>
  );
}

export default App;
