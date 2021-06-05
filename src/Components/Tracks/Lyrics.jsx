import React,{useState, useEffect, useContext} from "react";
import axios from 'axios'

const Lyrics = (props) => {
  const [track, setTrack] = useState({})
  const [lyrics, setLyrics] = useState({})


  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${ props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then((res) => {
        console.log(res.data)
        // setLyrics({ track_list: res.data.message.body.track_list });
      })
      .catch((err) => console.log(err));
   
  }, []);
  return (
    <>
      <h1>Lyrics</h1>
    </>
  );
};

export default Lyrics;
