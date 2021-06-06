import React,{useState, useEffect, useContext} from "react";
import axios from 'axios'
import {Link} from 'react-router-dom'
import Spinner from '../Layout/Spinner'

const Lyrics = (props) => {
  const [track, setTrack] = useState({})
  const [lyrics, setLyrics] = useState({})


  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${
          props.match.params.id
        }&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then(res => {
        let lyrics = res.data.message.body.lyrics;
        setLyrics({ lyrics });
        console.log(lyrics)

        return axios.get(
          `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${
            props.match.params.id
          }&apikey=${process.env.REACT_APP_MM_KEY}`
        );
      })
      .then(res => {
        let track = res.data.message.body.track;
        setTrack({ track });
        console.log(track)
      })
      .catch(err => console.log(err));
  }, [props.match.params.id]);
  return (
    <>
      {track ===undefined || lyrics === undefined ||
       Object.keys(track).length ===0 ||
        Object.keys(lyrics).length ===0? <Spinner /> :
         <>
            <Link to='/' className='btn btn-dark btn-sm mb-4'>Go back</Link>
            <div className='card'>
              <h5 className='card-header'>
                {track.track.track_name} by <span className='text-secondary'>{track.track.artist_name}</span>
              </h5>
              <div className='card-body'>
                <p className='card-text'>
                  {lyrics.lyrics.lyrics_body}
                </p>
              </div>
            </div>
         </>
      }
  
    </>
  );
};

export default Lyrics;
