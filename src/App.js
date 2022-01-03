import "./styles.css";
import React, { useEffect } from 'react'

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState} from "react";
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Switch, Route,useHistory, Redirect,useParams } from "react-router-dom";
import { MovieList } from "./MovieList";
import { Counter } from "./Counter";
import InfoIcon from '@mui/icons-material/Info';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { Color } from "./Color";
import Paper from '@mui/material/Paper';
import {  ThemeProvider, createTheme } from '@mui/material/styles';
import { BasicForm } from "./BasicForm";
import { MovieEdit } from "./MovieEdit";
import {  useFormik} from "formik";
import * as yup from 'yup';



export default function App() {
  const [movieList, setList] = useState([]);
  
//   useEffect(() => {
//   fetch("https://61c412e3f1af4a0017d99283.mockapi.io/movies",{method:'GET'})
//   .then(response => response.json())
//   .then(data => setList(data));
// },[])
  

  
  console.log([...movieList]);
  const history = useHistory();

  

  // console.log(movie)
  
  const[mode,setMode] = useState('dark')

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  // const theme = unstable_createMuiStrictModeTheme();

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={2} />
    <div className="App">
  
        <h1 className="hea">MOVIES</h1>
<div>
<AppBar position="static" >
 <nav className="menu-bar">
<Toolbar>
  <Button color="inherit" onClick={() => history.push("/")}>
    Home
  </Button>
</Toolbar>
<Toolbar>
  <Button color="inherit" onClick={() => history.push("/movies")}>
    Movies
  </Button>
</Toolbar>
<Toolbar>
  <Button color="inherit" onClick={() => history.push("/films")}>
    Films
  </Button>
</Toolbar>
<Toolbar>
  <Button color="inherit" onClick={() => history.push("/counter")}>
    Counter
  </Button>
</Toolbar>
<Toolbar>
  <Button color="inherit" onClick={() => history.push("/newform")}>
    Add
  </Button>
</Toolbar>
<Toolbar>
  <Button color="inherit" onClick={() => history.push("/tictac")}>
    TIC-TAC-TOE
  </Button>
</Toolbar>

<Toolbar>
  <Button color="inherit" onClick={() => history.push("/login")}>
   Color Game
  </Button>
</Toolbar>

<Toolbar>
  <Button color="inherit" onClick={() => setMode(mode === "light" ? "dark" : "light")}>
  {(mode == "light" ? "dark" : "light")} Mode
</Button>
</Toolbar>
{/* <Toolbar>
  <Button color="inherit" onClick={() => history.push("**")}>
    Not found
     </Button>
</Toolbar> */}
</nav>
</AppBar>


  <Switch>
  
  <Route exact path="/">
    <Home />
  </Route>

      <Route path="/counter">
          <Counter />
        </Route>
   
        <Route path="/login">
          <BasicForm />
        </Route>

    <Route path="/newform">
    <Addmovie movies={movieList} setList={setList}/>
      </Route>
   
     <Route path="/movies">
      <MovieList movies={movieList} setList={setList} /> 
     </Route>

     <Route path="/films">
      <Redirect to="/movies"/> 
     </Route>

     <Route path="/movie/edit/:id">
      {/* <Redirect to="/movies"/>  */}
      <MovieEdit />
     </Route>
   
   
      <Route path="/details/:id">
        <MovieDetails movies={movieList} />
      </Route>

      <Route path="/tictac">
      <TicTacToe />
     </Route>
      
      <Route path="**">
      <NotFound />
     </Route>

   
     </Switch>
    </div>
    </div>
    <Paper />
    </ThemeProvider>
  );




  function TicTacToe() {
    const{width,height} = useWindowSize();
    const[board,setBoard] = useState([null,null,null,null,null,null,null,null,null]);

    const[isXTurn,setXTurn] = useState(true);

    const handleClick = (index) => {
      console.log("Clicked",index);

      if(!winner && !board[index]){
        const boardCopy = [...board];
        boardCopy[index] = isXTurn ? "X" : "O";
        setBoard(boardCopy);
        setXTurn(!isXTurn);
        console.log(index)
      }
    }
    

      const decideWinner = (board) => {
        const lines =[
          [0,1,2],
          [3,4,5],
          [6,7,8],
          [0,3,6],
          [1,4,7],
          [2,5,8],
          [0,4,8],
          [2,4,6],
        ];
      
      for(let i=0;i<lines.length;i++){
const[a,b,c] = lines[i];
console.log(lines[i])
if(board[a] !== null && board[a] === board[b] && board[a]===board[c]){
  console.log("Winner is", board[a]);
  return(board[a])
}
      }
      return null;
      }
      const winner = decideWinner(board);
       const [hide,setHide]=useState(false);
    const style = {display:(hide)?"none":"block"};
    
    return(
      <div className="tictac">
     
      <div className="gameboard">
    {board.map((val, index) => (
      <GameBox val={val} onPlayerClick={()=> handleClick(index)}/>))}
      <div className="restart">
      {winner ? <Button onClick={() =>setBoard([null,null,null,null,null,null,null,null,null])}><IconButton aria-label="delete" color="primary"><RestartAltIcon />
          </IconButton>Restart</Button> : " "}</div>
          <div>
      
         <button  onClick={()=>{setXTurn(true);setHide(true)}}>X</button>
         <button  onClick={()=>{setXTurn(false);setHide(true)}}>O</button>
         </div>
    
          <div>
          {!winner && isXTurn==true ? <Button onClick={() => setXTurn(true)}>X turn</Button> : <Button onClick={() => setXTurn(!true)}>O turn</Button>} 
          </div>
    </div>
   
    {winner ?   <p>The Winner is {winner} <Confetti
      width={width}
      height={height}
      friction={0.99}
    ></Confetti></p> :" "}
    
    
    
    </div>
    )
  }

 

  function GameBox({val , onPlayerClick}){
  //  const [val,setVal] = useState(null)
    const a = { color: val==="X" ? "red" : "blue" };
    return(
      <div style={a} className="gamebox" onClick={() => onPlayerClick()}>{val}</div>
    )
  }

  function Addmovie() {

    
    const addMovie= (newMovie) => {
      

      fetch("https://61c412e3f1af4a0017d99283.mockapi.io/movies",
      {method:'POST',
      body:JSON.stringify(newMovie),
      headers:{
        "Content-Type" : "application/json"
      },})
      .then(response => response.json())
      .then((data) => history.push("/movies"));
    }
    
    
         const formValidationSchema=yup.object({
           movie:yup.string().min(5 , "a movie without name...Nah🧐").required('Required'),
           poster:yup.string().min(5 , "why not fill this poster").required('Required'),
           rating:yup.number().min(1, "Need a better rating").max(10,"").required('Required'),
           summary:yup.string().min(20 , "why not fill this summary").required('Required'),
           trailer:yup.string().min(5 , "why not fill this trailer").required('Required')
         })
    
    const formik = useFormik({
      initialValues:{ movie: "" , poster:"" , rating :"" , summary:"" , trailer:"" },
       validationSchema : formValidationSchema,
       onSubmit :(newMovie) => {
           console.log("onSubmit")
           addMovie(newMovie)
       }})
   
 
  
    
    return <div className="add-movie-form">
       <form onSubmit={formik.handleSubmit}>
      <TextField label="movie title" variant="standard" fullWidth sx={{ m: 1 }}
        value={formik.values.movie}
        id="movie"
        name="movie" 
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Enter movie name"
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
           helperText={formik.touched.rating && formik.errors.rating ? formik.errors.rating : " "}  />

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
        UPLOAD
      </Button>
      </form>
    </div>;
  }
}
export function Movie({ movie, poster, rating, summary, deleteButton,editButton,id}) {
  const [show, setShow] = useState(false);
  const a = { display: show ? "block" : "none" };
  const history = useHistory();
  // const nhis = useHistory()
  return (
    <div>
      <div>
        <div className="movie-container">
          <img src={poster} alt="" className="movie-img" />
          <div className="movie-title">
            <h2>{movie}</h2>
         
            <p>
              <Color rating={rating} />
            </p>
          </div>
          <IconButton aria-label="delete" color="primary"
           onClick={() => (history.push(`/details/${id}`))}
        ><InfoIcon />
          </IconButton>
          
          <IconButton aria-label="delete" onClick={() => setShow(!show)}>{!show ?<ExpandMoreIcon/>: <ExpandLessIcon />}
          </IconButton>
          <p style={a} className="movie-summary">
            {summary}
          </p>
          <div className="counter-container">
            <Counter />
            <div className="counter1">
            {editButton}
            {deleteButton}
           </div>
            </div>
            
        </div>
      </div>
    </div>
  );
}

function MovieDetails(){
  
  const {id} = useParams()
  const[movieinfo,setMovie] = useState([])
  console.log(movieinfo)
const getinfo =() =>{
  fetch(`https://61c412e3f1af4a0017d99283.mockapi.io/movies/${id}`,{method : "GET"})
  .then((response) => response.json())
  .then((data) => setMovie(data));}

  useEffect(getinfo,[])

 
  return(
    <div> <div className="info-container">
        {/* <img src={movieinfo.poster } alt="" className="movie-img" /> */}
        <iframe width="942" height="530" src={movieinfo.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div className="movie-title">
          <h2>{movieinfo.movie}</h2>
        <p>
            <Color rating={movieinfo.rating} />
          </p></div>
          <p className="movie-summary">
        {movieinfo.summary} </p>
          
        </div>
          </div>
       
);
}


function Home(){
  return(
    <div class="Iam">


<b>
  <div class="innerIam">
    welcome<br /> 
    to<br />
    my<br />
    movie<br />
    collections⭐
    </div>
</b>

</div>
   
    );
  }
  
  
  function NotFound(){
    return(
      <div>
    <h2>404</h2>
    <img src="https://iqonic.design/wp-content/uploads/2021/06/0_uqbx_RV-7Vzz1Yc8.gif" />
    </div>
    );
  }
  
