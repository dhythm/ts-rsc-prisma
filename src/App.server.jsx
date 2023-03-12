import React from "react";

const { Suspense } = React;

export default function App({ selectedId, isEditing, searchText }) {
  return (
    <div className="main">
      <section className="col sidebar">
        <section className="sidebar-header">
          <strong>React + Prisma</strong>
        </section>

        <section className="sidebar-menu" role="menubar"></section>

        <nav>
          <Suspense fallback={<>Loading...</>}>
            <>Suspensed</>
          </Suspense>
        </nav>
      </section>

      <section key={selectedId} className="col viewer">
        <Suspense fallback={<>Loading...</>}>
          <>Suspensed</>
        </Suspense>
      </section>
    </div>
  );
}
