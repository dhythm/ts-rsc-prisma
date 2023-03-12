import { prisma } from "./db.server";

export const UserList = ({ searchText }) => {
  const users = prisma.user.findMany();
  console.log({ users });

  return users.length > 0 ? (
    <ul className="users-list">
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  ) : (
    <div className="users-empty">
      {searchText ? `Couldn't find any users` : `No user exists`}
    </div>
  );
};
