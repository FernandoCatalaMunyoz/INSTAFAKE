import "./Profile.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userData } from "../../app/slices/userSlice";
import { useState, useEffect } from "react";
import { CInput } from "../../common/CInput/CInput";
import { GetProfile } from "../../services/apiCalls";

export const Profile = () => {
  const navigate = useNavigate();

  const rdxUser = useSelector(userData);
  const dispatch = useDispatch();
  console.log(rdxUser);

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
    if (!rdxUser.credentials.token) {
      navigate("/");
    }
  }, [rdxUser]);
  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const fetched = await GetProfile(tokenStorage);
        console.log(fetched, "fetcheadordxUser");

        setUser({
          nickName: fetched.data.nickName,
          name: fetched.data.name,
          lastName: fetched.data.lastName,
          email: fetched.data.email,
        });
        setLoadedData(true);
      } catch (error) {}
    };
    if (!loadedData) {
      getUserProfile();
    }
  }, [tokenStorage]);

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
            name={"Nickname"}
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
            value={user.name || ""}
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
        </div>
      )}
    </div>
  );
};
