import "./Admin.css";
import { useSelector, useDispatch } from "react-redux";
import { userData } from "../../app/slices/userSlice";
import { useEffect, useState } from "react";
import { GetPosts } from "../../services/apiCalls";
import { Card } from "../../common/Card/Card";
import { useNavigate } from "react-router-dom";

export const Admin = () => {
  const navigate = useNavigate();
  const rdxUser = useSelector(userData);
  console.log(rdxUser, "rdxUser");
  const token = rdxUser?.credentials?.token;

  const [posts, setPosts] = useState([]);
  const [loadedData, setLoadedData] = useState(false);

  //   if (rdxUser.credentials.user.roleName !== "super_admin") {
  //     setTimeout(() => {
  //       navigate("/");
  //     });
  //   }

  useEffect(() => {
    if (posts.length === 0) {
      const bringPosts = async () => {
        const fetched = await GetPosts(token);
        setPosts(fetched);
      };
      bringPosts();
    }
  }, [posts]);
  return (
    <div className="adminDesign">
      <div className="usersDesign">Hola</div>
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
            <div>Los personajes estan viniendo</div>
          )}
        </div>
      </div>
    </div>
  );
};
