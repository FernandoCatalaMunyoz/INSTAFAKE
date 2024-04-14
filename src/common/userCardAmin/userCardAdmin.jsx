import "./userCardAdmin.css";
export const UserCardAdmin = ({ title, ownerName, description, likes }) => {
  return (
    <div className="cardDesign">
      <div className="cardTitle">{title}</div>
      <div className="ownerName">{ownerName}</div>
      <div className="cardDescription">{description}</div>
      <div className="cardLikes">
        <div>Likes:</div>
        <div>{likes}</div>
      </div>
    </div>
  );
};
