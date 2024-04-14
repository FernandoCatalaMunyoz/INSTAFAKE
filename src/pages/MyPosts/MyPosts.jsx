import { useSelector } from "react-redux";
import "./MyPosts.css";
import { useEffect, useState } from "react";
import { CreatePost, DeletePost, GetMyPosts } from "../../services/apiCalls";
import { userData } from "../../app/slices/userSlice";

import { MyPostsCard } from "../../common/MyPostsCard/MyPostsCard";
import { CInput } from "../../common/CInput/CInput";
import { CButton } from "../../common/CButton/CButton";
import { DInput } from "../../common/DInput/DInput";

export const MyPosts = () => {
  const rdxUser = useSelector(userData);

  const token = rdxUser?.credentials?.token;
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({
    title: "",
    description: "",
  });

  const inputHandler = (e) => {
    setPost((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  useEffect(() => {
    const bringMyPosts = async () => {
      try {
        const fetched = await GetMyPosts(token);

        setPosts(fetched);
      } catch (error) {}
    };
    if (token && posts.length === 0) {
      bringMyPosts();
    }
  });

  const deletePost = async (_id) => {
    try {
      const fetched = await DeletePost(_id, token);

      setPosts(posts.filter((post) => post._id !== _id));
    } catch (error) {
      throw new Error("Cant delete Post" + error.message);
    }
  };

  const createPost = async () => {
    try {
      const fetched = await CreatePost(token, post);

      // setPost(post.map((post) => post._id === posts._id) ? fetched.data : post);
    } catch (error) {
      throw new Error("Cant create Post" + error.message);
    }
  };

  return (
    <div className="myPostsDesign">
      <div className="createPostsDesign">
        <div className="createPostTitle">Sube tu post!</div>
        <CInput
          className={"inputDesgign"}
          type={"text"}
          placeHolder={"Título del Post"}
          name={"title"}
          value={post.title || ""}
          onChangeFunction={(e) => inputHandler(e)}
        />
        <DInput
          className={"inputDesgign"}
          type={"text"}
          placeHolder={"Descripcion del Post"}
          name={"description"}
          value={post.description || ""}
          onChangeFunction={(e) => inputHandler(e)}
        />
        <CButton
          className={"cButtonDesign"}
          title={"Post it!"}
          functionEmit={createPost}
        />
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
