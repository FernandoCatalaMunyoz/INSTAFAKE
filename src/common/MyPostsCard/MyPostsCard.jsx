import "./MyPostsCard.css";

export const MyPostsCard = ({ title, description, likes, clickFunction }) => {
  return (
    <div className="myPostsCardDesign">
      <div className="myPostTitle">{title}</div>
      <div className="myPostDescription">{description}</div>
      <div className="cardLikes">
        <div>Likes:</div>
        <div>{likes}</div>
      </div>
      <button onClick={clickFunction} className="likeButton">
        Borrar Post
      </button>
    </div>
  );
};
