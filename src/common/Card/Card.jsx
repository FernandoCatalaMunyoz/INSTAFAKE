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
      <div>{title}</div>
      <div>{description}</div>
      <div>{likes}</div>
    </div>
  );
};
