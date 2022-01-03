import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { Movie } from "./App";
import React, { useState } from 'react'
import { useEffect } from 'react'

import { useHistory} from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
export function MovieList() {
  // const[update,setUpdate] = useState([])
  const [movies, setList] = useState([]);
  const getMovies=()=>{
    
    
    fetch("https://61c412e3f1af4a0017d99283.mockapi.io/movies",{method:'GET'})
    .then(response => response.json())
    .then(data => setList(data));
    
  }
  
  const deleteMovie=(id) => {
    fetch(`https://61c412e3f1af4a0017d99283.mockapi.io/movies/${id}`,
    {method:'DELETE'})
    .then(response => response.json())
    .then(() => getMovies())} ;
    
    useEffect(getMovies,[])
    
    
    
    const history = useHistory();
    return (
    <div className="movie-list">
      {movies.map(({ movie, poster, rating, summary,id},index) => (
        <Movie
        key={id}
          deleteButton={<IconButton aria-label="delete" color="error" size="small"
            onClick={() => 
              deleteMovie(id)}>
              {/* { const deleteindex = index;
              const remaining = movies.filter(
                (mv, ind) => deleteindex !== ind
              );
              console.log(movies, remaining);
              setList(remaining);
            }   }  > */}
            <DeleteIcon />
          </IconButton>}
          
          editButton={<IconButton aria-label="delete" color="secondary" size="small"
            onClick={() => 
              history.push(`/movie/edit/${id}`)}><EditIcon /></IconButton>}
          id={id}
          poster={poster}
          movie={movie}
          rating={rating}
          summary={summary} />
      ))}
    </div>
  );
      }



  
  // }

