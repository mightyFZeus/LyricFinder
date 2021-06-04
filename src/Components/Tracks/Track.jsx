import React from "react";

const Track = ({track}) => {
  return (
    <>
      <div className='col-md-6'>
        <div className='card mb-4 shadow-sm'>
          <div className='card-body'>
            <h1>{track.artist_name}</h1>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Track;
