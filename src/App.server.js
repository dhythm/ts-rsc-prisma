import React from "react";
import { Hello } from "./Hello.server";
import { User } from "./User.server";
import { UserList } from "./UserList.server";

const { Suspense } = React;

export default function App({ selectedId, isEditing, searchText }) {
  console.log({ selectedId, isEditing, searchText });
  return (
    <div className="main">
      <section className="col sidebar">
        <section className="sidebar-header">
          <strong>React + Prisma</strong>
        </section>

        <section className="sidebar-menu" role="menubar"></section>

        <nav>
          <Suspense fallback={<div>Loading...</div>}>
            <UserList searchText={searchText} />
          </Suspense>
        </nav>
      </section>

      <section key={selectedId} className="col viewer">
        <Hello />
        <Suspense fallback={<div>Loading...</div>}>
          <User selectedId={""} isEditing={false} />
        </Suspense>
      </section>
    </div>
  );
}
