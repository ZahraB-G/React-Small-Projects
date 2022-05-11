import React from "react";
import "./Login.css";
function login() {
  return (
    <div class="container">
      <h2>Login Page</h2>
      <form class="login-form">
        <div>
          <label>Email</label>
          <br />
          <input class="userInput" type="text" />
        </div>
        <div>
          <label>Password</label>
          <br />
          <input class="userInput" type="password" />
        </div>
        <button class="btn">Log in</button>
      </form>
    </div>
  );
}
export default login;
