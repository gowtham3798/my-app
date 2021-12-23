import "./styles.css";
import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState} from "react";
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Switch, Route, Link,useHistory,Redirect,useParams } from "react-router-dom";
import { MovieList } from "./MovieList";
import { Counter } from "./Counter";
import InfoIcon from '@mui/icons-material/Info';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { Color } from "./Color";
// import { Route,BrowserRouter as Router } from "react-router-dom";

export default function App() {
  const INITIAL_STATE = [
    {
        movie: "RRR",
      poster:
        "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
      rating: 8.8,
      summary:
        "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
      trailer: "https://www.youtube.com/embed/f_vbAtFSEc0"
    },
    {
        movie: "Iron man 2",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      rating: 7,
      summary:
        "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
      trailer: "https://www.youtube.com/embed/wKtcmiifycU"
    },
    {
        movie: "No Country for Old Men",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      rating: 8.1,
      summary:
        "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
      trailer: "https://www.youtube.com/embed/38A__WT3-o0"
    },
    {
        movie: "Jai Bhim",
      poster:
        "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      summary:
        "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      rating: 8.8,
      trailer: "https://www.youtube.com/embed/nnXpbTFrqXA"
    },
    {
        movie: "The Avengers",
      rating: 8,
      summary:
        "Marvel's The Avengers (classified under the    movie Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same    movie.",
      poster:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
      trailer: "https://www.youtube.com/embed/eOrNdBpGMv8"
    },
    {
        movie: "Interstellar",
      poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      rating: 8.6,
      summary:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E"
    },
    {
        movie: "Baahubali",
      poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      rating: 8,
      summary:
        "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
      trailer: "https://www.youtube.com/embed/sOEg_YZQsTI"
    },
    {
        movie: "Ratatouille",
      poster:
        "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      rating: 8,
      summary:
        "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
      trailer: "https://www.youtube.com/embed/NgsQ8mVkN8w"
    }
  ];
  

  const [movieList, setList] = useState(INITIAL_STATE);
  const [movie, setName] = useState(" ");
  const [poster, setPoster] = useState(" ");
  const [rating, setRating] = useState(" ");
  const [summary, setSummary] = useState(" ");
  console.log([...movieList]);
  const history = useHistory();

  var arr=[]

  console.log(movie)
  return (
    
    <div className="App">
      
        <h1 className="hea">MOVIES</h1>
<div>
<AppBar position="static">
 <nav>
<Toolbar>
  <Button color="inherit" onClick={() => history.push("/home")}>
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
  <Button color="inherit" onClick={() => history.push("**")}>
    Not found
     </Button>
</Toolbar>
</nav>
</AppBar>
<hr />
<div>
  <Switch>
  
  <Route path="/home">
    <Home />
  </Route>

      <Route path="/counter">
          <Counter />
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
    </div>
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
    return <div className="add-movie-form">
      <TextField id="standard-basic" label="movie title" variant="standard"
        value={movie}
        onChange={(event) => setName(event.target.value)} />
      <TextField id="standard-basic" label="image url" variant="standard"

        value={poster}
        onChange={(event) => setPoster(event.target.value)} />
      <TextField id="standard-basic" label="imdb rating" variant="standard"

        value={rating}
        onChange={(event) => setRating(event.target.value)} />
      <TextField id="standard-basic" label="summary" variant="standard"
        value={summary}
        onChange={(event) => setSummary(event.target.value)} />
      <Button variant="contained"
        onClick={() => {
          const newMovie = {
            movie,
            poster,
            rating,
            summary
          }
          setList([...movieList, newMovie]);
          history.push("/movies");
        } }
      >
        UPLOAD
      </Button>
    </div>;
  }
}

export function Movie({ movie, poster, rating, summary, deleteButton,id}) {
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
          <IconButton aria-label="delete"
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
          </div>
          <div className="delete">
            {deleteButton}</div>
            
        </div>
      </div>
    </div>
  );
}

function MovieDetails({movies}){
  
  
  const {id} = useParams()
  const movieinfo = movies[id];
  console.log(movies[id])
//  const {img} = useParams()
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

function NotFound(){
  return(
    <div>
  <h2>404</h2>
  <img src="https://iqonic.design/wp-content/uploads/2021/06/0_uqbx_RV-7Vzz1Yc8.gif" />
  </div>
  );
}

function Home(){
 const styles = {fontSize : "40px" , textAlign : "center"}
  return(
    <div style={styles}>Welcome to the movie collection</div>
  );
}


// {movies.map(({ movie, poster, rating, summary }, index) => (
//   <Movie infoMovie={<IconButton aria-label="delete" color="error" size="small"
//   onClick={() => {
//     const infoindex = index;
//     const remaininginfo = movies.reduce(
//       (mv, ind) => infoindex == ind
//     );
//     console.log(movies, remaininginfo);
//     setList(remaininginfo);
//   }}
// ><InfoIcon />
//  </IconButton>}
//  id={index}
//  poster={poster}
//  movie={movie}
//  rating={rating}
//  summary={summary} />))}
