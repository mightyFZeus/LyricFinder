import React, { useContext } from "react";
import { GlobalContext } from "../../context";
import {Link} from 'react-router-dom'
import Spinner from "../Layout/Spinner";
import Track from "./Track";
const Tracks = () => {
  const { track_list, heading } = useContext(GlobalContext);

  return (

    
    <>
       

      {track_list === undefined ? (
        <Spinner />
      ) : (
        <>
          <h3 className="text-center mb-4">{heading}</h3>
          <div className="row">
            {track_list.map((item) => (
              <Track key={item.track.track_id} track={item.track} />
            ))}
          </div>
          <Link
              to='/Search'
              className="btn btn-dark btn-block"
            >
              Search for Lyrics
            </Link>
        </>
      )}
    </>
  );
};

export default Tracks;
