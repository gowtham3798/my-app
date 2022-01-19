import React from "react";
import { useHistory } from "react-router-dom";


export function Home() {
  const history = useHistory();
  return (
    <div className="home-page">
      <h4 onClick={() => (history.push(`/customize`))}>Customize Pizza</h4>
      <h4 onClick={() => (history.push(`/menu`))}>Explore our Menu</h4>
    </div>
  );
}
