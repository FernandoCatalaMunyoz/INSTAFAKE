import "./Card.css";
export const Card = ({
  title,
  ownerName,
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
      <div className="ownerName">{ownerName}</div>
      <div className="cardDescription">{description}</div>
      <div className="cardLikes">
        <div>Likes:</div>
        <div>{likes}</div>
      </div>
      <div className="likeSection">
        <div className="likeButton" onClick={clickFunction}>
          Like
        </div>
      </div>
    </div>
  );
};
