import React from 'react';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
import './emailSuccess.css';


export default function EmailSuccess() {
    const history = useHistory()
  return (
    <div id='card' class="animated fadeIn">
  <div id='upper-side'>
      <h3 id='status'>
      Success
    </h3>
  </div>
  <div id='lower-side'>
    <p id='message'>
      Congratulations, your account has been successfully created.
    </p>
    <Button onClick={() => history.push('/signin')} color="success" id="contBtn">Continue</Button>
  </div>
</div>
  )
}
