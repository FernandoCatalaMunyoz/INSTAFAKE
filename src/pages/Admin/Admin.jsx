import "./Admin.css";
import { useSelector, useDispatch } from "react-redux";
import { userData } from "../../app/slices/userSlice";
import { useEffect, useState } from "react";
import { GetPosts, GetUsers, GiveLike } from "../../services/apiCalls";

import { useNavigate } from "react-router-dom";
import { UserCard } from "../../common/UserCard/UserCard";
import { UserCardAdmin } from "../../common/userCardAmin/userCardAdmin";

export const Admin = () => {
  const navigate = useNavigate();
  const rdxUser = useSelector(userData);

  const token = rdxUser?.credentials?.token;

  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  if (rdxUser?.credentials?.user?.roleName !== "super_admin") {
    setTimeout(() => {
      navigate("/");
    });
  }

  useEffect(() => {
    if (posts.length === 0) {
      const bringPosts = async () => {
        const fetched = await GetPosts(token);
        setPosts(fetched);
      };
      if (token) {
        bringPosts();
      }
    }
  }, [posts]);
  useEffect(() => {
    const bringUsers = async () => {
      const fetched = await GetUsers(token);

      setUsers(fetched);
    };
    bringUsers();
  }, [users]);

  const giveLike = async (id) => {
    const fetched = await GiveLike(token, id);

    setPosts(
      posts.map((post) =>
        post._id === posts._id
          ? {
              ...post,
              likes: fetched.data.likes,
            }
          : post
      )
    );
  };

  return (
    <div className="adminDesign">
      <div className="usersDesign">
        <div>
          {users.length > 0 ? (
            <div className="cardsRoaster">
              {users.map((user) => {
                return (
                  <UserCard
                    key={user._id}
                    firstName={user.firstName}
                    lastName={user.lastName}
                    nickName={user.nickName}
                    email={user.email}
                  />
                );
              })}
            </div>
          ) : (
            <div>Los usuarios estan viniendo</div>
          )}
        </div>
      </div>
      <div className="postDesign">
        <div>
          {posts.length > 0 ? (
            <div className="cardsRoaster">
              {posts
                .map((post) => {
                  return (
                    <UserCardAdmin
                      key={post._id}
                      title={post.title}
                      ownerName={post.ownerName}
                      description={post.description}
                      likes={post.likes.length}
                      photo={post.photo}
                    ></UserCardAdmin>
                  );
                })
                .reverse()}
            </div>
          ) : (
            <div>Los posts estan viniendo</div>
          )}
        </div>
      </div>
    </div>
  );
};
