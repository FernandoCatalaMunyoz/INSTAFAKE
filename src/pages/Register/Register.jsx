import { useState } from "react";
import { RegisterUser } from "../../services/apiCalls";

export const Register = () => {
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

  const registerMe = async () => {
    try {
      for (let elemento in user) {
        if (user[elemento] === "") {
          throw new Error("Todos los campos tienen que estar rellenos");
        }
      }

      const fetched = await RegisterUser(user);

      setMsgError(fetched.message);

      setTimeout(() => {
        navigate("/");
      }, 1200);
    } catch (error) {
      setMsgError(error.message);
    }
  };
  return <></>;
};
