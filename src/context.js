import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

//intial state

const initialState = {
  track_list: [],
  heading: "Top 10 Tracks"
};

// create context

export const GlobalContext = createContext(initialState);

// Provider Component

export const GlobalProvider = ({ children }) => {
  const [lyric, setLyric] = useState(initialState);
  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart_name=top&page=1&page_size=10&country=it&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <GlobalContext.Provider value={lyric}>{children}</GlobalContext.Provider>
  );
};
