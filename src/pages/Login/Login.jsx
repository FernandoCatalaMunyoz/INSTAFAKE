import { useNavigate } from "react-router-dom";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { CInput } from "../../common/CInput/CInput";
import { decodeToken } from "react-jwt";
import { userData } from "../../app/slices/userSlice";
import { LoginUser } from "../../services/apiCalls";
import { login } from "../../app/slices/userSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
  const navigate = useNavigate();

  //instancia redux para escritura
  const dispatch = useDispatch();
  const rdxUser = useSelector(userData);
  const token = rdxUser?.credentials?.token;
  if (token) {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [userError, setUserError] = useState({
    firstNameError: "",
    lastNameError: "",
    nickNameError: "",
    emailError: "",
    passwordError: "",
  });
  const inputHandler = (e) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    toast.dismiss();
    userError.firstNameError && toast.warn(userError.firstNameError);
    userError.lastNameError && toast.warn(userError.lastNameError);
    userError.nickNameError && toast.warn(userError.nickNameError);
    userError.emailError && toast.warn(userError.emailError);
    userError.passwordError && toast.warn(userError.passwordError);
  }, [userError]);

  const loginMe = async () => {
    try {
      const fetched = await LoginUser(user);

      if (fetched.token) {
        const decodificado = decodeToken(fetched.token);

        const passport = {
          token: fetched.token,
          user: decodificado,
        };

        if ((fetched.success = true)) {
          toast.success(fetched.message);
        }
        dispatch(login({ credentials: passport }));
        setTimeout(() => {
          navigate("/");
        }, 1200);
      }
    } catch (error) {}
  };

  return (
    <div className="loginDesign">
      <div>Inicio de sesión</div>
      <CInput
        type={"email"}
        name={"email"}
        placeHolder={"Email"}
        value={user.email || ""}
        onChangeFunction={inputHandler}
      />
      <CInput
        type={"password"}
        name={"password"}
        placeHolder={"Contraseña"}
        value={user.password || ""}
        onChangeFunction={inputHandler}
      />
      <button onClick={loginMe}>Login</button>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};
