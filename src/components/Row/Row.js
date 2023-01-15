import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import ReactPlayer from "react-youtube";
import axios from "../../axios";
import classes from "./Row.module.css";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = (props) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(props.fetchUrl);
      setMovies(request.data.results);
    };
    fetchData();
  }, [props.fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handlerClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          //https://www.youtube.com/watch?v=0cPCMIuDk2I&ab_channel=EdRoh
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className={classes["row"]}>
      <h2>{props.title}</h2>

      <div className={classes["row__posters"]}>
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handlerClick(movie)}
            className={`${classes["row__poster"]} ${
              props.isLargeRow && classes["row__posterLarge"]
            }`}
            src={`${base_url}${
              props.isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>

      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
