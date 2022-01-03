import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Switch, Route, Link,useHistory,Redirect,useParams } from "react-router-dom";
import React from 'react'


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