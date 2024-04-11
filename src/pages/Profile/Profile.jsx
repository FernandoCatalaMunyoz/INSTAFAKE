import "./Profile.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, profile, userData } from "../../app/slices/userSlice";
import { useState, useEffect } from "react";
import { CInput } from "../../common/CInput/CInput";
import { CButton } from "../../common/CButton/CButton";
import { GetProfile, UpdateProfile } from "../../services/apiCalls";

export const Profile = () => {
  const navigate = useNavigate();

  const rdxUser = useSelector(userData);
  const dispatch = useDispatch();

  const [tokenStorage, setTokenStorage] = useState(rdxUser?.credentials?.token);
  const [loadedData, setLoadedData] = useState(false);
  const [write, setWrite] = useState("disabled");
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
  const inputHandler = (e) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  useEffect(() => {
    if (!rdxUser?.credentials?.token) {
      navigate("/");
    }
  }, [rdxUser.credentials.token]);
  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const fetched = await GetProfile(tokenStorage);

        setUser({
          firstName: fetched.data.firstName,
          lastName: fetched.data.lastName,
          nickName: fetched.data.nickName,
          email: fetched.data.email,
        });
        setLoadedData(true);
      } catch (error) {}
    };
    if (!loadedData) {
      getUserProfile();
    }
  }, [tokenStorage]);

  const updateData = async () => {
    try {
      console.log(rdxUser, "rdx");
      const userDatatoUpdate = await UpdateProfile(
        rdxUser?.credentials?.token,
        user
      );

      setUser(userDatatoUpdate);
      // setUser({
      //   firstName: userDatatoUpdate.data.firstName,
      //   lastName: userDatatoUpdate.data.lastName,
      //   nickName: userDatatoUpdate.data.nickName,
      //   email: userDatatoUpdate.data.nickName,
      // });

      setLoadedData(false);
      setWrite("disabled");

      dispatch(profile({ credentials: userData }));
    } catch (error) {
      console.error("Error al actualizar el perfil", error);
    }
  };

  return (
    <div className="profileDesign">
      {!loadedData ? (
        <div>CARGANDO...</div>
      ) : (
        <div>
          <div>Nickname</div>
          <CInput
            className={"inputDesign"}
            type={"text"}
            placeHolder={"Nickname"}
            name={"nickName"}
            disabled={write}
            value={user.nickName || ""}
            onChangeFunction={(e) => inputHandler(e)}
          />
          <div>Nombre</div>
          <CInput
            className={"inputDesign"}
            type={"text"}
            placeHolder={"Nombre"}
            name={"firstName"}
            disabled={write}
            value={user.firstName || ""}
            onChangeFunction={(e) => inputHandler(e)}
          />
          <div>Apellido</div>
          <CInput
            className={"inputDesign"}
            type={"text"}
            placeHolder={"Apellido"}
            name={"lastName"}
            disabled={write}
            value={user.lastName || ""}
            onChangeFunction={(e) => inputHandler(e)}
          />
          <div>Email</div>
          <CInput
            className={"inputDesign"}
            type={"text"}
            placeHolder={"Email"}
            name={"email"}
            disabled={write}
            value={user.email || ""}
            onChangeFunction={(e) => inputHandler(e)}
          />
          <CButton
            className={
              write === "" ? "cButtonGreen cButtonDesign" : "cButtonDesign"
            }
            title={write === "" ? "Confirmar" : "Editar"}
            functionEmit={write === "" ? updateData : () => setWrite("")}
          />
        </div>
      )}
    </div>
  );
};
