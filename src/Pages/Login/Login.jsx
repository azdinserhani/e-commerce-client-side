import { useState } from "react";
import "./Login.scss";
import { login } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(user);

    login(dispatch, user);
    navigate("/");
  };
  return (
    <div className="login">
      <div className="container">
        <div className="right"></div>
        <div className="left">
          <h1>Login</h1>
          <form>
            <input
              type="text"
              placeholder="username"
              required
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
            <input
              type="text"
              placeholder="password"
              required
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <button onClick={handleLogin}>Login</button>
          </form>
          <p>
            Don't have an a account?{" "}
            <span onClick={() => navigate("/register")}>RegisterNow</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
