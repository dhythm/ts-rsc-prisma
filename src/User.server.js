import { fetch } from "react-fetch";

export const User = ({ selectedId, isEditing }) => {
  const user =
    selectedId !== null
      ? fetch(`http://localhost:4000/user/${selectedId}`).json()
      : null;

  if (!user) {
    return (
      <div>
        <span>Click a user on the left to view something! 🥺</span>
      </div>
    );
  }

  return (
    <div>
      <span>{user.name}</span>
      <span>{user.email}</span>
    </div>
  );
};
