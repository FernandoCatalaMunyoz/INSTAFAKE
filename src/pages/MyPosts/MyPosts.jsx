import { useSelector } from "react-redux";
import "./MyPosts.css";
import { useEffect, useState } from "react";
import { DeletePost, GetMyPosts } from "../../services/apiCalls";
import { userData } from "../../app/slices/userSlice";
import { UserCardAdmin } from "../../common/userCardAmin/userCardAdmin";
import { MyPostsCard } from "../../common/MyPostsCard/MyPostsCard";

export const MyPosts = () => {
  const rdxUser = useSelector(userData);

  const token = rdxUser?.credentials?.token;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const bringMyPosts = async () => {
      try {
        const fetched = await GetMyPosts(token);
        console.log(fetched, "my posts fetched");
        setPosts(fetched);
      } catch (error) {}
    };
    if (token && posts.length === 0) {
      bringMyPosts();
    }
  });

  const deletePost = async (id) => {
    try {
      const fetched = await DeletePost(id, token);
      console.log(fetched, "delete fetched");
      setPosts(posts.filter((post) => post._id !== id));
    } catch (error) {
      throw new Error("Cant delete Post" + error.message);
    }
  };
  return (
    <div className="myPostsDesign">
      <div className="createPostsDesign">
        <div>Myposts</div>
      </div>
      <div className="myPostsDesign">
        {posts.length > 0 ? (
          <div className="cardsRoasterMyPosts">
            {posts
              .map((post) => {
                return (
                  <MyPostsCard
                    key={post._id}
                    title={post.title}
                    description={post.description}
                    likes={post.likes.lenght}
                    clickFunction={() => deletePost(post._id)}
                  />
                );
              })
              .reverse()}
          </div>
        ) : (
          <div>Los personajes estan viniendo</div>
        )}
      </div>
    </div>
  );
};
