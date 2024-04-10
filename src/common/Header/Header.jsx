import "./Header.css";
import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { userData, logout } from "../../app/slices/userSlice";
import { CLink } from "./CLink/CLink";

export const Header = () => {
  //Instancia del modo lectura
  const rdxUser = useSelector(userData);
  console.log(rdxUser, "rdxUser");

  //Instancia del modo escritura
  const dispatch = useDispatch();

  return (
    <div className="header-design">
      <div className="title">INSTAFAKE</div>
      <div className="navigate">
        <CLink path={"/"} title={"Home"} />
        {rdxUser?.credentials?.token ? (
          <div className="navigator-design">
            <CLink path="/profile" title={rdxUser?.credentials?.user?.name} />
            <div
              className="out-design"
              onClick={() => dispatch(logout({ credentials: "" }))}
            >
              log out
            </div>
          </div>
        ) : (
          <div className="navigator-design">
            <CLink path="/login" title="Login" />
            <CLink path="/register" title="Register" />
          </div>
        )}
      </div>
    </div>
  );
};
