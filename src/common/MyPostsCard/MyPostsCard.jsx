import "./MyPostsCard.css";

export const MyPostsCard = ({ title, description, likes, clickFunction }) => {
  return (
    <div className="myPostsCardDesign">
      <div className="myPostTile">{title}</div>
      <div className="myPostDescription">{description}</div>
      <div className="cardLikes">
        <div>Likes:</div>
        <div>{likes}</div>
      </div>
      <button onClick={clickFunction}>Borrar Post</button>
    </div>
  );
};
