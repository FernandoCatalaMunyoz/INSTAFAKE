import { useSelector } from "react-redux";
import "./MyPosts.css";
import { useEffect, useState } from "react";
import { GetMyPosts } from "../../services/apiCalls";
import { userData } from "../../app/slices/userSlice";
import { UserCardAdmin } from "../../common/userCardAmin/userCardAdmin";

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
  return (
    <div className="myPostsDesign">
      <div className="createPostDesign">
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
          <div>Los personajes estan viniendo</div>
        )}
      </div>
      <div className="myPostsDesign"></div>
    </div>
  );
};
