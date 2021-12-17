import "./styles.css";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";



export default function App() {
  const INITIAL_STATE = [
    {
      movie: "12 Angry Men",
      poster:
        "https://i2.wp.com/wingsart.studio/wp-content/uploads/2020/11/12-Angry-Men-Landscape-Updated.jpg?resize=640%2C483&ssl=1",
      rating: 9,
      summary:
        "A dissenting juror in a murder trial slowly manages to convince the others that the case is not as obviously clear as it seemed in court."
    },
    {
      movie: "Avatar",
      poster: "https://miro.medium.com/max/453/1*zWGSyuGKWgKYu-ZAf5bxiA.jpeg",
      rating: 7.8,
      summary:
        "Jake, who is paraplegic, replaces his twin on the Na'vi inhabited Pandora for a corporate mission. After the natives accept him as one of their own, he must decide where his loyalties lie."
    },
    {
      movie: "Adventure of Tintin",
      poster: "https://bestsimilar.com/img/movie/thumb/af/7981.jpg",
      rating: 7.5,
      summary:
        "Tintin, a young reporter, buys the model of a ship and is intrigued when his dog shows him a scroll after the toy breaks. He tells Captain Haddock and they embark on an adventure to find a shipwreck."
    },
    {
      movie: "Shutter Island",
      poster: "https://i.ytimg.com/vi/Udfq0fiScug/movieposter_en.jpg",
      rating: 8.2,
      summary:
        "Teddy Daniels and Chuck Aule, two US marshals, are sent to an asylum on a remote island in order to investigate the disappearance of a patient, where Teddy uncovers a shocking truth about the place."
    },

    {
      movie: "Iron man 2",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      rating: 7,
      summary:
        "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy."
    },
    {
      movie: "No Country for Old Men",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      rating: 8.1,
      summary:
        "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money."
    },
    {
      movie: "Jai Bhim",
      poster:
        "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      summary:
        "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      rating: 8.8
    },
    {
      movie: "The Avengers",
      rating: 8,
      summary: `Marvel's The Avengers (classified under the name Marvel Avengers
      Assemble in the United Kingdom and Ireland), or simply The Avengers, is
      a 2012 American superhero film based on the Marvel Comics superhero team
      of the same name.`,
      poster:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg"
    },
    {
      movie: "Interstellar",
      poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      rating: 8.6,
      summary: `When Earth becomes uninhabitable in the future, a farmer and ex-NASA
  pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team
  of researchers, to find a new planet for humans.`
    },
    {
      movie: "Baahubali",
      poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      rating: 8,
      summary: `In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.`
    },
    {
      movie: "Ratatouille",
      poster:
        "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      rating: 8,
      summary: `Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.`
    },

    {
      movie: 96,
      poster:
        "https://a10.gaanacdn.com/gn_img/albums/9En3peWXDV/En3pYMLPWX/size_xxl_1535086576.webp",
      rating: 8.6,
      summary: `K Ramachandran, a photographer, gets nostalgic after he visits his school in his hometown. During a reunion with his classmates, he meets Janaki, his childhood sweetheart.`
    },

    {
      movie: "M.S. Dhoni: The Untold Story",
      poster: "https://m.media-amazon.com/images/I/71miTEyKvYL._SL1112_.jpg",
      rating: 7.9,
      summary: `M S Dhoni, a boy from Ranchi, aspires to play cricket for India. Though he initially tries to please his father by working for the Indian Railways, he ultimately decides to chase his dreams.`
    },
    {
      movie: "Dark Knight",
      poster:
        "https://i.pinimg.com/originals/0f/a9/af/0fa9afc141f0096e064a5ab1854b36f1.jpg",
      rating: 9,
      summary:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
    },
    {
      movie: "King Kong",
      poster: "https://m.media-amazon.com/images/I/817FBcXLN2L._SL1500_.jpg",
      rating: 9,
      summary:
        "Peter Jackson's expansive remake of the 1933 classic follows director Carl Denham (Jack Black) and his crew on a journey from New York City to the ominous Skull Island to film a new movie. Accompanying him are playwright Jack Driscoll (Adrien Brody) and actress Ann Darrow (Naomi Watts), who is whisked away by the monstrous ape, Kong, after they reach the island. The crew encounters dinosaurs and other creatures as they race to rescue Ann, while the actress forms a bond with her simian captor."
    }
  ];

  const [movieList, setList] = useState(INITIAL_STATE);
  const [movie, setName] = useState(" ");
  const [poster, setPoster] = useState(" ");
  const [rating, setRating] = useState(" ");
  const [summary, setSummary] = useState(" ");
  console.log([...movieList]);

  return (
    <div className="App">
      <h1 className="hea">MOVIES</h1>
    <div className="add-movie-form">
      <TextField id="standard-basic" label="movie title" variant="standard" 
        value={movie}
        onChange={(event) => setName(event.target.value)}
       
      />
     <TextField id="standard-basic" label="image url" variant="standard"
       
        value={poster}
        onChange={(event) => setPoster(event.target.value)}
      />
      <TextField id="standard-basic" label="imdb rating" variant="standard"
        
        value={rating}
        onChange={(event) => setRating(event.target.value)}
      />
      <TextField id="standard-basic" label="summary" variant="standard"
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
        
      />
        <Button variant="contained"
          onClick={() => {
            const newMovie = {
              movie,
              poster,
              rating,
              summary
            };
            setList([...movieList, newMovie]);
          }}
        >
         UPLOAD
        </Button>
      </div>
      {/* <MovieList movies={movies} /> */}
      <MovieList movies={movieList} setList={setList} />
      {/* <MovieList movies={remaining} /> */}
      {/* console.log([...movieList]) */}
    </div>
  );
}

function MovieList({ movies, setList }) {
  return (
    <div className="movie-list">
      {movies.map(({ movie, poster, rating, summary }, index) => (
        <Movie
          deleteButton={
            <Button variant="outlined" color="error"  size="small"
              onClick={() => {
                const deleteindex = index;
                const remaining = movies.filter(
                  (mv, ind) => deleteindex !== ind
                );
                console.log(movies, remaining);
                setList(remaining);
              }}
            >
              delete
            </Button>
          }
          poster={poster}
          movie={movie}
          rating={rating}
          summary={summary}
        />
      ))}
    </div>
  );
}

function Movie({ movie, poster, rating, summary, deleteButton }) {
  const [show, setShow] = useState(false);
  const a = { display: show ? "block" : "none" };
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
          <Button variant="outlined" onClick={() => setShow(!show)}>Toggled summary</Button>
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

function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setLike1] = useState(0);
  return (
    <div className="counter-container">
      <div>
      <Button variant="contained" onClick={() => setLike(like + 1)}>
          {" "}
          <span role="img" aria-label="emo">
            👍
          </span>
          {like}
        </Button>
      </div>
      <div>
        <Button variant="contained"  onClick={() => setLike1(dislike + 1)}>
          {" "}
          <span role="img" aria-label="emo">
            👎
          </span>
          {dislike}
        </Button>
      </div>
    </div>
  );
}

function Color({ rating }) {
  const a = { color: "green", fontSize: "13px" };
  const b = { color: "red", fontSize: "13px" };
  return rating >= 8.5 ? (
    <p style={a}>
      {" "}
      <span role="img" aria-label="emo">
        ⭐
      </span>
      {rating}
    </p>
  ) : (
    <p style={b}>
      {" "}
      <span role="img" aria-label="emo">
        ⭐
      </span>
      {rating}
    </p>
  );
}

