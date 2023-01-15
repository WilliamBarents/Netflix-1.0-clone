import React, { useState, useEffect } from "react";
import axios from "../../axios";
import classes from "./Row.module.css";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(props.fetchUrl);
      setMovies(request.data.results);
    };
    fetchData();
  }, [props.fetchUrl]);

  return (
    <div className={classes["row"]}>
      <h2>{props.title}</h2>

      <div className={classes["row__posters"]}>
        {movies.map((movie) => (
          <img
            key={movie.id}
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

      {/* {Container -> posters} */}
    </div>
  );
};

export default Row;
