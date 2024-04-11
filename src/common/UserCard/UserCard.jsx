import "./UserCard.css";

export const UserCard = ({ firstName, lastName, nickName, email }) => {
  return (
    <div className="userCardDesign">
      <div className="userCardFirstName">{firstName}</div>
      <div className="userCardLastName">{lastName}</div>
      <div className="userCardNickName">{nickName}</div>
      <div className="userCardEmail">{email}</div>
    </div>
  );
};
