import "./Card.css";
export const Card = ({
  title,
  photo,
  description,
  ownerId,
  likes,
  clickFunction,
}) => {
  return (
    <div className="cardDesign" onClick={clickFunction}>
      {/* <div>
        <img className="avatarDesign" src={photo} alt={title} />
      </div> */}
      <div className="cardTitle">{title}</div>
      <div className="cardDescription">{description}</div>
      <div className="cardLikes">{likes}</div>
      <div className="likeSection">
        <div className="likeButton" onClick={clickFunction}>
          Like
        </div>
        <div>Likes</div>
      </div>
    </div>
  );
};
