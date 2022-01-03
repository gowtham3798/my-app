import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import React from 'react'


export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setLike1] = useState(0);
  return (
    <div className="counter-container">
      <div>
        <IconButton aria-label="delete" onClick={() => setLike(like + 1)}>
          {" "}
          <span role="img" aria-label="emo">
            <Badge badgeContent={like} color="primary">

              👍
            </Badge>
          </span>

        </IconButton>
      </div>
      <div>
        <IconButton aria-label="delete" variant="contained" onClick={() => setLike1(dislike + 1)}>
          {" "}
          <span role="img" aria-label="emo">
            <Badge badgeContent={dislike} color="error">
              👎
            </Badge>
          </span>
        </IconButton>
        {/* <IconButton aria-label="delete">
      <DeleteIcon />
    </IconButton> */}
      </div>
    </div>
  );
}