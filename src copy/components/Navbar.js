import React from "react";

function Navbar() {
  function searchHandle(e) {
    console.log(e.target.value);
  }

  console.log("NAVBAR");
  return (
    <nav>
      <input type="text" placeholder="movie name.." onChange={searchHandle} />
      <button id="search-btn">Search</button>
    </nav>
  );
}

export default Navbar;
