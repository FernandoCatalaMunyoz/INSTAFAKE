import "./Home.css";
import { useSelector, useDispatch } from "react-redux";
import { userData } from "../../app/slices/userSlice";
import { useEffect, useState } from "react";
import { getPosts } from "../../services/apiCalls";
import { Card } from "../../common/Card/Card";

export const Home = () => {
  const rdxUser = useSelector(userData);
  const token = rdxUser.credentials.token;
  console.log(rdxUser, "rdxUser");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (posts.length === 0) {
      const bringPosts = async () => {
        const fetched = await getPosts(token);
        setPosts(fetched);
      };
      bringPosts();
    }
  }, [posts]);

  return (
    <>
      <div className="homeDesign">
        {!token ? (
          <img
            src="../../img/redes-sociales-profesionales-1.jpg"
            alt=""
            srcSet=""
          />
        ) : (
          <div>
            {posts.length > 0 ? (
              <div className="cardsRoaster">
                {posts.map((post) => {
                  return (
                    <Card
                      key={post._id}
                      title={post.title}
                      ownerName={post.ownerName}
                      description={post.description}
                      likes={post.likes.length}
                      photo={post.photo}
                    ></Card>
                  );
                })}
              </div>
            ) : (
              <div>Los personajes estan viniendo</div>
            )}
          </div>
        )}
      </div>
    </>
  );
};
