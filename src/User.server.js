import { fetch } from "react-fetch";

export const User = ({ selectedId }) => {
  const user = selectedId
    ? fetch(`http://localhost:4000/user/${selectedId}`).json()
    : null;

  if (!user) {
    return (
      <div>
        <span>Click a user on the left to view something! 🥺</span>
      </div>
    );
  }

  return <div>{JSON.stringify(user)}</div>;
};
