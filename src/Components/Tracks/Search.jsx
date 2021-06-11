import React,{useState, useContext, useEffect} from 'react'
import axios from 'axios'
import Result from './Result'


//intial state

const initialState = {
  track_list: [],
  heading: "Search Results",
  
  
};
const Search =() =>{
  const [trackTitle, setTrackTitle] = useState('')
  const [searchResult, setSearchResult] =useState(initialState)
 

 

  const  findTrack= (e) =>{
 setTrackTitle ( e.target.value)

  }

  const onSubmit =(e) =>{
    e.preventDefault()
    

  }


  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then((res) => {
        console.log(res.data, 'test')
       setSearchResult({ track_list: res.data.message.body.track_list });
       console.log(setSearchResult)
      })
      .catch((err) => console.log(err));
  
  }, [trackTitle]);
  return(
    <>
        <div className='card card-body mb-4 p-4'>
          <h1 className='diplay-4 text-center'>
            <i className='fas fa-music'></i>Search for a Song
          </h1>
          <p className='lead text-center'>Get the Lyrics for any song</p>
          <form  onSubmit={onSubmit}>
           <div className='form-group'>
           <input 
             type='text'
              className='form-control form-control-lg'
             placeholder='Song Title ...'
              name='trackTitle'
              value={trackTitle}
              onChange={findTrack}
             / >
           </div>
          <button 
  
          className='btn btn-primary btn-lg btn-block mt-2'
           type='submit'>Get track Lyrics</button>
            
          </form>
        </div>
        <div className="row">
            <Result result={searchResult}  />
        </div>
       
    </>
  )
}

export default Search