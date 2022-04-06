import logo from './logo.svg';
import Button from '@mui/material/Button';
import logo1 from './logo.png';
import React from 'react'
import './App.css';

 function loadRazorPay(src){
  return new Promise(function(resolve, reject){
  const script = document.createElement('script');
  script.src = src;
  document.body.appendChild(script);
  script.onload = () =>{
    resolve(true);
  }
  script.onerror = () =>{
    resolve(false);
  }
  document.body.appendChild(script);
  })
}

const DEV = document.domain === 'localhost'


function Payment() {

 async function displayRazorPay(){
       const res = await loadRazorPay("https://checkout.razorpay.com/v1/checkout.js")

       if(!res){
         alert('Razorpay SDK failed to load. Are you online?')
       }

     const data = await fetch('https://razorpay21.herokuapp.com/liverazorpay',{method: 'POST'})
     .then((t) => t.json())

     const options = {
      key : DEV ? "rzp_test_mBtDZDFlOZzPx7" : 'rzp_live_FjNvJ4sMFh7wsC', // Enter the Key ID generated from the Dashboard  
      currency : data.currency,
      amount : data.amount.toString(),
      order_id : data.id,
      name: "Pizza App",
      description: "Thank you for the order",
      image: {logo1},
      handler: function (response){
          alert(response.razorpay_payment_id);
          alert(response.razorpay_order_id);
          alert(response.razorpay_signature)
      },
      prefill: {
        name: "Gaurav Kumar",
        // email: "gaurav.kumar@example.com",
        // contact: "9999999999"
      },
  };
  var paymentObject = new window.Razorpay(options);
  paymentObject.open();
  }

  return (
    <div >
      <header className="App-header">
      <img src="https://razorpay.com/newsroom-content/uploads/2021/02/white.png" />
          <h2>Complete your payment with Razorpay</h2>
        <Button variant="contained"
          className="App-link"
          onClick={displayRazorPay}
          target="_blank"
          rel="noopener noreferrer"
        >
          Proceed
        </Button>
      </header>
    </div>
  );
}

export default Payment;
