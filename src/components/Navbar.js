import React, { useEffect } from "react";
import { searchMovie, setShow } from "../actions/action";

function Navbar(props) {
  const store = props.store;
  function searchHandle(e) {
    store.dispatch(searchMovie(e.target.value));
    store.dispatch(setShow("SEARCH")); // result section to display
  }

  // to have componentDidMount()
  useEffect(() => {
    store.subscribe(() => {
      console.log("NAV SUBS:", store.getState());
    });
    // to ignore warning!
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("RENDER: NAVBAR");
  return (
    <nav>
      <input
        type="text"
        placeholder="search movie name.."
        onChange={searchHandle}
      />
      {/* <button onClick={searchHandle} id="search-btn">
        Search
      </button> */}
    </nav>
  );
}

export default Navbar;
