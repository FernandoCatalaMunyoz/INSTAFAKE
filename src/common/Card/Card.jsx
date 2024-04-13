import "./Card.css";
export const Card = ({
  title,
  ownerName,
  photo,
  description,
  ownerId,
  likes,
  clickFunction,
  clickDetail,
}) => {
  return (
    <div className="cardDesign" onClick={clickFunction}>
      <div className="cardTitle">{title}</div>
      <div className="ownerName">{ownerName}</div>
      <div className="cardDescription">{description}</div>
      <div onClick={clickDetail}>Detail</div>
      <div className="cardLikes">
        <div>Likes:</div>
        <div>{likes}</div>
      </div>
      <div className="likeSection">
        <div className="likeButton" onClick={() => clickFunction}>
          Like
        </div>
      </div>
    </div>
  );
};
