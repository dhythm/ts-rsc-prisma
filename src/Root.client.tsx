// @ts-expect-error
import { FC, PropsWithChildren, use, useState } from "react";
// @ts-expect-error
import { createFromFetch } from "react-server-dom-webpack/client";
import { LocationContext, Location } from "./LocationContext.client";

export const Root: FC<PropsWithChildren> = ({ children }) => {
  const [location, setLocation] = useState<Location>({
    selectedId: null,
    isEditing: false,
    searchText: "",
  });

  return (
    <LocationContext.Provider value={[location, setLocation]}>
      {children}
      <Container />
    </LocationContext.Provider>
  );
};

const dataFromServer = `
1:"$Sreact.suspense"
0:["$","div",null,{"className":"main","children":[["$","section",null,{"className":"col sidebar","children":[["$","section",null,{"className":"sidebar-header","children":["$","strong",null,{"children":"React + Prisma"}]}],["$","section",null,{"className":"sidebar-menu","role":"menubar"}],["$","nav",null,{"children":["$","$1",null,{"fallback":"Loading...","children":"Suspensed"}]}]]}],["$","section","null",{"className":"col viewer","children":["$","$1",null,{"fallback":"Loading...","children":"Suspensed"}]}]]}]
`;
// FIXME: Webpack is crashed if importing createFromFetch...
const chunk = createFromFetch(
  fetch(`data:text/plain;base64,${btoa(dataFromServer)}`)
  // fetch(`/rsc`)
);

const Container: FC = () => {
  return use(chunk);
};
