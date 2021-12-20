import "./styles1.css";
import React from "react";
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
// import TextField from '@mui/material/TextField';
// import { useState } from "react";
// import IconButton from '@mui/material/IconButton';
// import MailIcon from '@mui/icons-material/Mail';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import ExpandLessIcon from '@mui/icons-material/ExpandLess';
// import { Switch, Route, Link } from "react-router-dom";
// import { MovieList } from "./MovieList";
// import { Counter } from "./Counter";
// import { Route,BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="container1">
          <Card className="card">
              <div className="title">
            <h5 className="text-muted">FREE</h5>
            <p><strong>$0</strong><sub>/month</sub></p></div>
            <hr />
            <p><strong>✔ </strong>Single User</p>
            <p><strong>✔ </strong>5GB storage</p>
            <p><strong>✔ </strong>Unlimited Public Projects</p>
            <p><strong>✔ </strong>Community Access</p>
            <p className="text-muted"><strong>✕ </strong>Unlimited Private Projects</p>
            <p className="text-muted"><strong>✕ </strong>Dedicated Phone Support</p>
            <p className="text-muted"><strong>✕ </strong>Free Subdomain</p>
            <p className="text-muted"><strong>✕ </strong>Monthly Status Reports</p>
            <div className="but"><Button variant="contained">Button</Button>
           </div>
          </Card>
        </div>
        <div className="container1">
          <Card className="card">
              <div className="title">
            <h5 className="text-muted">PLUS</h5>
            <p><strong>$9</strong><sub>/month</sub></p>
            </div>
            <hr />
            <p><strong>✔ </strong>5 Users</p>
            <p><strong>✔ </strong>50GB Storage</p>
            <p><strong>✔ </strong>Unlimited Public Projects</p>
            <p><strong>✔ </strong>Community Access</p>
            <p><strong>✔ </strong>Unlimited Private Projects</p>
            <p><strong>✔ </strong>Dedicated Phone Support</p>
            <p><strong>✔ </strong>Free Subdomain </p>
            <p className="text-muted"><strong>✕ </strong>Monthly Status Reports</p>
            <div className="but"><Button variant="contained">Button</Button>
           </div>
          </Card>
        </div>
        <div className="container1">
          <Card className="card">
              <div className="title">
            <h5 className="text-muted">PRO</h5>
            <p><strong>$49</strong><sub>/month</sub></p>
            </div>
            <hr />
            <p><strong>✔ </strong>Unlimited Users</p>
            <p><strong>✔ </strong>150GB Storage</p>
            <p><strong>✔ </strong>Unlimited Public Projects</p>
            <p><strong>✔ </strong>Community Access</p>
            <p><strong>✔ </strong>Unlimited Private Projects</p>
            <p><strong>✔ </strong>Dedicated Phone Support</p>
            <p><strong>✔ </strong>Free Subdomain</p>
            <p><strong>✔ </strong>Monthly Status Reports</p>
            <div className="but"><Button variant="contained">Button</Button>
           </div>
          </Card>
        </div>
      </div>
    </div>
  );
}





