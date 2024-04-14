import "./UserCard.css";

export const UserCard = ({ firstName, lastName, nickName, email }) => {
  return (
    <div className="userCardDesign">
      <div className="titleUserCard">
        <div>Nombre:</div>
        <div className="userCardFirstName">{firstName}</div>
      </div>
      <div className="titleUserCard">
        <div>Apellidos:</div>
        <div className="userCardLastName">{lastName}</div>
      </div>
      <div className="titleUserCard">
        <div>Alias:</div>
        <div className="userCardNickName">{nickName}</div>
      </div>
      <div className="titleUserCard">
        <div>Email:</div>
        <div className="userCardEmail">{email}</div>
      </div>
    </div>
  );
};
