import { useState, useEffect } from "react";
import { RegisterUser } from "../../services/apiCalls";
import { CInput } from "../../common/CInput/CInput";
import { CButton } from "../../common/CButton/CButton";
import "./Register.css";
import { validame } from "../../utils/functions";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    nickName: "",
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

  const [msgError, setMsgError] = useState("");

  const inputHandler = (e) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const checkError = (e) => {
    const error = validame(e.target.name, e.target.value);

    setUserError((prevState) => ({
      ...prevState,
      [e.target.name + "Error"]: error,
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

  const registerMe = async () => {
    try {
      for (let elemento in user) {
        if (user[elemento] === "") {
          throw new Error("Todos los campos tienen que estar rellenos");
        }
      }

      const fetched = await RegisterUser(user);
      console.log(fetched, "fetcheado");
      if ((fetched.success = true)) {
        toast.success(fetched.message);
        console.log("loggeado");
      }
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      setMsgError(error.message);
    }
  };
  return (
    <>
      <div className="registerDesign">
        <div>Registro de Usuario</div>
        <CInput
          className={`inputDesign ${
            userError.nameError !== "" ? "inputDesignError" : ""
          }`}
          type={"text"}
          placeHolder={"Nombre"}
          name={"firstName"}
          value={user.firstName || ""}
          onChangeFunction={(e) => inputHandler(e)}
          onBlurFunction={(e) => checkError(e)}
        />
        <div className="error">{userError.nameError}</div>
        <CInput
          className={`inputDesign ${
            userError.lastNameError !== "" ? "inputDesignError" : ""
          }`}
          type={"text"}
          placeHolder={"Apellido"}
          name={"lastName"}
          value={user.lastName || ""}
          onChangeFunction={(e) => inputHandler(e)}
          onBlurFunction={(e) => checkError(e)}
        />
        <div className="error">{userError.lastNameError}</div>
        <CInput
          className={`inputDesign ${
            userError.nickNameError !== "" ? "inputDesignError" : ""
          }`}
          type={"text"}
          placeHolder={"Alias"}
          name={"nickName"}
          value={user.nickName || ""}
          onChangeFunction={(e) => inputHandler(e)}
          onBlurFunction={(e) => checkError(e)}
        />
        <div className="error">{userError.nickNameError}</div>
        <CInput
          className={`inputDesign ${
            userError.emailError !== "" ? "inputDesignError" : ""
          }`}
          type={"email"}
          placeHolder={"email"}
          name={"email"}
          value={user.email || ""}
          onChangeFunction={(e) => inputHandler(e)}
          onBlurFunction={(e) => checkError(e)}
        />
        <div className="error">{userError.emailError}</div>
        <CInput
          className={`inputDesign ${
            userError.passwordError !== "" ? "inputDesignError" : ""
          }`}
          type={"password"}
          placeHolder={"password"}
          name={"password"}
          value={user.password || ""}
          onChangeFunction={(e) => inputHandler(e)}
          onBlurFunction={(e) => checkError(e)}
        />
        <div className="error">{userError.passwordError}</div>
        <CButton
          className={"cButtonDesign"}
          title={"Register"}
          functionEmit={registerMe}
        />
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
    </>
  );
};
