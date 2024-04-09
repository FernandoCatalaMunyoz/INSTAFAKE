import { useNavigate } from "react-router-dom";
import "./Login.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { CInput } from "../../common/CInput/CInput";
import { decodeToken } from "react-jwt";

import { LoginUser } from "../../services/apiCalls";
import { login } from "../../app/slices/userSlice";

export const Login = () => {
  const navigate = useNavigate();

  //instancia redux para escritura
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const inputHandler = (e) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const loginMe = async () => {
    const fetched = await LoginUser(user);

    if (fetched.token) {
      const decodificado = decodeToken(fetched.token);

      const passport = {
        token: fetched.token,
        user: decodificado,
      };
      console.log(passport, "passport");
      dispatch(login({ credentials: passport }));
      setTimeout(() => {
        navigate("/");
      }, 500);
    }
  };

  return (
    <div className="loginDesign">
      <CInput
        type={"email"}
        name={"email"}
        value={user.email || ""}
        onChangeFunction={inputHandler}
      />
      <CInput
        type={"password"}
        name={"password"}
        value={user.password || ""}
        onChangeFunction={inputHandler}
      />
      <button onClick={loginMe}>Login</button>
    </div>
  );
};
