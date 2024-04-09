import { useState } from "react";
import { RegisterUser } from "../../services/apiCalls";
import { CInput } from "../../common/CInput/CInput";
import { CButton } from "../../common/CButton/CButton";
import "./Register.css";
import { validame } from "../../utils/functions";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [userError, setUserError] = useState({
    nameError: "",
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

  const registerMe = async () => {
    try {
      for (let elemento in user) {
        if (user[elemento] === "") {
          throw new Error("Todos los campos tienen que estar rellenos");
        }
      }

      const fetched = await RegisterUser(user);
      console.log(fetched, "fetcheado");

      setTimeout(() => {
        navigate("/");
      }, 1200);
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
          name={"name"}
          value={user.name || ""}
          onChangeFunction={(e) => inputHandler(e)}
          onBlurFunction={(e) => checkError(e)}
        />
        <div className="error">{userError.nameError}</div>
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
      </div>
    </>
  );
};
