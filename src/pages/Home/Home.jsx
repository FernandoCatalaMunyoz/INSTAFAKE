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

    bringPosts();
  }, [posts]);

  const giveLike = async (id) => {
    const fetched = await GiveLike(token, id);

    // setPosts(
    //   posts.map((item) =>
    //     item._id === posts._id
    //       ? {
    //           ...item,
    //           likes: posts.likes.includes(rdxUser.credentials.user._id)
    //             ? item.likes.filter((id) => id !== rdxUser.credentials.user._id)
    //             : [...item.likes, rdxUser.credentials.user._id],
    //         }
    //       : item
    //   )
    // );
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
