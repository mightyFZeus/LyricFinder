import React from 'react'
import {Link} from 'react-router-dom'

const Result = ({result})=>{
  return (
    <>
      {result === undefined ? 'it is undefined' :
    
    <div>
      <h2>{result.heading}</h2>
    {result.track_list.map((item)=>(
      <div className='card card-body'>
          <h5>{item.track.artist_name}</h5>
          <p className="card-text">
              <strong>
                <i className="fa fa-play">Track</i>
              </strong>
              : {item.track.track_name}
              <br />
              <strong>
                <i className="fa fa-compact-disc">Album</i>
              </strong>
              : {item.track.album_name}
            </p>
            <Link
              to={`lyrics/track/${item.track.track_id}`}
              className="btn btn-dark btn-block"
            >
              <i className="fas fa-chevron-right"></i>View lyrics
            </Link>
      </div>
      
    ))}</div>}
    </>
  )
}

export default Result