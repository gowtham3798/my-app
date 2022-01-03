import React from 'react';

export function Color({ rating }) {
  const a = { color: "green", fontSize: "13px" };
  const b = { color: "red", fontSize: "13px" };
  return rating >= 8.5 ? (
    <div style={a}>
      {" "}
      <span role="img" aria-label="emo">
        ⭐
      </span>
      {rating}
    </div>
  ) : (
    <div style={b}>
      {" "}
      <span role="img" aria-label="emo">
        ⭐
      </span>
      {rating}
    </div>
  );
}

