import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState,useEffect} from "react";
import { useHistory} from "react-router-dom";
import { useParams } from 'react-router-dom'
import * as yup from 'yup';
import {  useFormik} from "formik";
import React from 'react'

export function MovieEdit() {

    // const [show,setShow] = useState()
    // const styles = {display : show ? "block" : "none"}
    // console.log(movieinfo.rating)
    // const movieinfo = movies[id];

    const {id} = useParams()
    console.log(id)
    const[movieinfo,setMovie] = useState()
  const getinfo =() =>{
    fetch(`https://61c412e3f1af4a0017d99283.mockapi.io/games/${id}`,{method : "GET"})
    .then((response) => response.json())
    .then((data) => setMovie(data));}
  
    useEffect(getinfo,[])

    console.log(movieinfo)
   
    return(
     
      movieinfo ?  <UpdatedMovies movieinfo={movieinfo} name1={movieinfo.movie} image1={movieinfo.poster} trailer1={movieinfo.trailer} rating1={movieinfo.rating} summary1={movieinfo.summary}/> : " "
      )
   
  }

function UpdatedMovies({movieinfo,name1,image1,trailer1,rating1,summary1}){
    console.log("updated")
    console.log(movieinfo)
const history = useHistory();
   

const editMovie= (updatedMovie) => {
  
  fetch(`https://61c412e3f1af4a0017d99283.mockapi.io/games/${movieinfo.id}`,
  {method:'PUT',
  body:JSON.stringify(updatedMovie),
  headers:{
    "Content-Type" : "application/json"
  },})
  .then(response => response.json())
  .then(() => history.push("/movies"));
}

const formValidationSchema=yup.object({
  movie:yup.string().min(5 , "a game without name...Nah🧐").required('Required'),
  poster:yup.string().min(5 , "why not fill this poster").required('Required'),
  rating:yup.number().min(1, "Need a better rating").max(10,"").required('Required'),
  summary:yup.string().min(20 , "why not fill this summary").required('Required'),
  trailer:yup.string().min(5 , "why not fill this trailer").required('Required')
})

const formik = useFormik({
initialValues:{ movie: name1 , poster:image1 , rating :rating1 , summary:summary1 , trailer:trailer1 },
validationSchema : formValidationSchema,
onSubmit :(upadatedMovie) => {
  console.log("onSubmit",upadatedMovie)
  editMovie(upadatedMovie)
}})


    return <div className="editmovie-form">
    
        <form onSubmit={formik.handleSubmit}>
      <TextField label="game title" variant="standard" fullWidth sx={{ m: 1 }}
        value={formik.values.movie}
        id="movie"
        name="movie" 
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Enter game name"
        error={formik.touched.movie && formik.errors.movie}
        helperText={formik.touched.movie && formik.errors.movie ? formik.errors.movie : " "} />

      <TextField id="standard-basic" label="image url" variant="standard" fullWidth sx={{ m: 1 }}
        value={formik.values.poster}
        id="poster"
        name="poster" 
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Enter image URL"
        error={formik.touched.poster && formik.errors.poster}
        helperText={formik.touched.poster && formik.errors.poster ? formik.errors.poster : " "} />

      <TextField id="standard-basic" label="imdb rating" variant="standard" fullWidth sx={{ m: 1 }}
           value={formik.values.rating}
           id="rating"
           name="rating" 
           type="number"
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
           placeholder="Enter rating"
           error={formik.touched.rating && formik.errors.rating} 
           helperText={formik.touched.rating && formik.errors.rating ? formik.errors.rating : " "} / >

      <TextField id="standard-basic" label="summary" variant="standard" fullWidth sx={{ m: 1 }}
         value={formik.values.summary}
         id="summary"
         name="summary" 
         type="text"
         label="summary"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         placeholder="Enter movie summary"
         error={formik.touched.summary && formik.errors.summary }
         helperText={formik.touched.summary && formik.errors.summary ? formik.errors.summary : " "}/>


         <TextField id="standard-basic" label="trailer" variant="standard" fullWidth sx={{ m: 1 }}
        value={formik.values.trailer}
        id="trailer"
        name="trailer" 
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Enter trailer url"
        error={formik.touched.trailer && formik.errors.trailer}
        helperText={formik.touched.trailer && formik.errors.trailer ? formik.errors.trailer : " "}/>


      <Button type="submit" variant="outlined">
       save
      </Button>
      </form>
    </div>;
}













