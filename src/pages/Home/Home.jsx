import "./Home.css";
import { useSelector, useDispatch } from "react-redux";
import { userData } from "../../app/slices/userSlice";
import { useEffect, useState } from "react";
import { GetPosts, GiveLike } from "../../services/apiCalls";
import { Card } from "../../common/Card/Card";

export const Home = () => {
  const rdxUser = useSelector(userData);
  console.log(rdxUser, "rdxUser");
  const token = rdxUser?.credentials?.token;

  const [posts, setPosts] = useState([]);
  const [loadedData, setLoadedData] = useState(false);

  useEffect(() => {
    if (posts.length === 0) {
      const bringPosts = async () => {
        const fetched = await GetPosts(token);
        setPosts(fetched);
      };
      bringPosts();
    }
  }, [posts]);

  const giveLike = async (id) => {
    console.log(id, "id");
    const fetched = await GiveLike(token, id);
    console.log(fetched, "fetched");
    console.log(posts, "posts");

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
