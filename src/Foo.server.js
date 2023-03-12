import { fetch } from "react-fetch";

export const Foo = () => {
  const data = fetch("http://localhost:4000/foo").json();

  return <div>{JSON.stringify(data)}</div>;
};
