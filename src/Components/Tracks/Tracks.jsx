import React, { useContext } from "react";
import { GlobalContext } from "../../context";

const Tracks = () => {
  const { lyric } = useContext(GlobalContext);

  return (
    <>
      <h1>Tracks</h1>
    </>
  );
};

export default Tracks;
