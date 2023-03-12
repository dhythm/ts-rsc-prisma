import { Suspense } from "react";
import { Clock } from "./Clock.client";
import { Foo } from "./Foo.server";
import { Hello } from "./Hello.server";
import { SearchField } from "./SearchField.client";
import { User } from "./User.server";
import { UserList } from "./UserList.server";

export default function App({ selectedId, isEditing, searchText }) {
  console.log({ selectedId, isEditing, searchText });
  return (
    <div className="main">
      <section className="col sidebar">
        <section className="sidebar-header">
          <strong>React + Prisma</strong>
        </section>

        <section className="sidebar-menu" role="menubar">
          <div>
            <SearchField />
            <Clock />
          </div>
        </section>

        <nav>
          <Suspense fallback={<div>Loading...</div>}>
            <UserList searchText={searchText} />
          </Suspense>
        </nav>
      </section>

      <section key={selectedId} className="col viewer">
        <Hello />
        <Suspense fallback={<div>Loading...</div>}>
          <Foo />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <User selectedId={"74ccbf87-7480-4711-b3f7-587f826675f6"} />
        </Suspense>
      </section>
    </div>
  );
}
