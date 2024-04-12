import "./Admin.css";
import { useSelector, useDispatch } from "react-redux";
import { userData } from "../../app/slices/userSlice";
import { useEffect, useState } from "react";
import { GetPosts, GetUsers } from "../../services/apiCalls";
import { Card } from "../../common/Card/Card";
import { useNavigate } from "react-router-dom";
import { UserCard } from "../../common/UserCard/UserCard";

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
      bringPosts();
    }
  }, [posts]);
  useEffect(() => {
    const bringUsers = async () => {
      const fetched = await GetUsers(token);

      setUsers(fetched);
    };
    bringUsers();
  }, [users]);

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
                    <Card
                      key={post._id}
                      title={post.title}
                      ownerName={post.ownerName}
                      description={post.description}
                      likes={post.likes.length}
                      photo={post.photo}
                      clickFunction={() => giveLike(post._id)}
                    ></Card>
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
