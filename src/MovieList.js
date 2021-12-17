import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { Movie } from "./App";
import React from 'react'
export function MovieList({ movies, setList }) {
  return (
    <div className="movie-list">
      {movies.map(({ movie, poster, rating, summary }, index) => (
        <Movie
          deleteButton={<IconButton aria-label="delete" color="error" size="small"
            onClick={() => {
              const deleteindex = index;
              const remaining = movies.filter(
                (mv, ind) => deleteindex !== ind
              );
              console.log(movies, remaining);
              setList(remaining);
            }}
          >
            <DeleteIcon />
          </IconButton>}
          poster={poster}
          movie={movie}
          rating={rating}
          summary={summary} />
      ))}
    </div>
  );
}
