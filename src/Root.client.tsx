import { FC, PropsWithChildren, useState } from "react";
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
    </LocationContext.Provider>
  );
};

// const dataFromServer = `
// M1:{"id":"Clock.tsx","name":"Clock","chunks":["pika","chu"]}
// J0:["$","div",null,{"children":[["$","h1",null,{"children":"React Server Components example"}],[["$","p",null,{"children":"Hello, world!"}],["$","@1",null,{}]]]}]
// `;
//
// const chunk = createFromFetch(
//   fetch(`data:text/plain;base64,${btoa(dataFromServer)}`)
// );
//
// const Container: FC = () => {
//   return use(chunk);
// };
