import React from "react";
import { useParams } from "react-router-dom";
import { PhotoContext } from "../context/PhotoContext";
import Gallery from "./Gallery";

const Search = () => {
  return (
    <div>
      {/* <h2>{searchTerm} Images</h2> */}
      <div className="photo-container">
        {/* Conditionally render the Gallary here */}
      </div>
    </div>
  );
};

export default Search;
