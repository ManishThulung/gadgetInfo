import React, { useState, Fragment } from "react";
import "./Search.css";
import { useNavigate } from "react-router-dom";
import MetaData from "../layout/Metadata";

const Search = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/phones/${keyword}`);
    } else {
      navigate("/phones");
    }
  };

  return (
    <Fragment>
      <MetaData title="Search Phone" />
      <form className="searchBox" onSubmit={searchSubmitHandler}>
        <input
          type="text"
          placeholder="Search a Phone ..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
    </Fragment>
  );
};

export default Search;
