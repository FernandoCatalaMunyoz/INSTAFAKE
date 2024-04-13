import "./Home.css";
import { useSelector, useDispatch } from "react-redux";
import { userData } from "../../app/slices/userSlice";
import { toDetail } from "../../app/slices/detailSlice";
import { useEffect, useState } from "react";
import { GetPosts, GiveLike } from "../../services/apiCalls";
import { Card } from "../../common/Card/Card";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const rdxUser = useSelector(userData);
  const dispatch = useDispatch();
  const token = rdxUser?.credentials?.token;
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const bringPosts = async () => {
      try {
        const fetched = await GetPosts(token);

        setPosts(fetched);
      } catch (error) {}
    };
    if (token) {
      bringPosts();
    }
  }, [posts]);

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

  const toDetailPost = (post) => {
    dispatch(toDetail({ detail: post }));

    navigate("/detail");
  };
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
                        clickDetail={() => toDetailPost(post)}
                      ></Card>
                    );
                  })
                  .reverse()}
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
