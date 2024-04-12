import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../Home/Home";

import { Register } from "../Register/Register";
import { Login } from "../Login/Login";

import { Profile } from "../Profile/Profile";
import { Admin } from "../Admin/Admin";
import { MyPosts } from "../MyPosts/MyPosts";
// import { Detail } from "../Detail/Detail";

export const Body = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to={"/"} replace />} />
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/myPosts" element={<MyPosts />} />
      {/* <Route path="/detail" element={<Detail />} /> */}
    </Routes>
  );
};
