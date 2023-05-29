import React, { ChangeEvent, useState } from "react";

function Login() {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="form-container">
      <form>
        <h1>Admin Panel</h1>
        <div className="input-container">
          <label>Email:</label>
          <input type="text" onChange={handleChange} />
        </div>
        <div className="input-container">
          <label>Password:</label>
          <input type="password" onChange={handleChange} />
        </div>
        <button type="button" onClick={() => console.log(user)}>
          Sign in
        </button>
      </form>
    </div>
  );
}

export default Login;
