import "./Home.css";
import { useSelector, useDispatch } from "react-redux";
import { userData } from "../../app/slices/userSlice";
import { useEffect, useState } from "react";
import { GetPosts, GiveLike } from "../../services/apiCalls";
import { Card } from "../../common/Card/Card";

export const Home = () => {
  const rdxUser = useSelector(userData);

  const token = rdxUser?.credentials?.token;

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
    //   if (fetched.data && fetched.data._id) {
    //     console.log(fetched.data);
    //     setPosts(posts.map((post) => (post.id === id ? fetched.data : post)));
    //   }
    // };

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
