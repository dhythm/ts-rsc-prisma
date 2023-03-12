import React, { useState, useTransition } from "react";
import { Spinner } from "./components/Spinner";
// import { useLocation } from "./LocationContext.client";

export const SearchField = () => {
  const [text, setText] = useState("");
  const [isSearching, startSearching] = useTransition();
  // const [, setLocation] = useLocation();

  return (
    <form
      className="search"
      role="search"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label className="offscreen" htmlFor="sidebar-search-input">
        Search for a title
      </label>
      <input
        id="sidebar-search-input"
        placeholder="Search"
        value={text}
        onChange={(e) => {
          const newText = e.target.value;
          setText(newText);
          startSearching(() => {
            // setLocation((prev) => ({
            //   ...prev,
            //   searchText: newText,
            // }));
          });
        }}
      />
      <Spinner active={isSearching} />
    </form>
  );
};
