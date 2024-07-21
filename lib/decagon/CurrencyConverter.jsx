import axios from "axios";
import React from "react";
import { useState } from 'react';


export default function CurrencyConverter() {
  
  const [baseURL, setBaseURL] = useState('https://us-east1-serverless-306422.cloudfunctions.net/exchangerates');

  const getInputValue = cn => document.getElementsByClassName(cn)[0].value.trim();

  const handleSubmit = e => {
    // prevent form submit page reload 
    e.preventDefault();

    // get form controls
    var x = getInputValue('currency-source');
    var y = getInputValue('currency-destination');
    var z = getInputValue('currency-date');
    var outp = document.getElementsByClassName('conversion-result')[0];
    
    // debug form controls
    console.log(x, y, z, outp.innerHTML);

    // form validation
    if (x.length < 1 || y.length < 1 || z.length < 1) {
      outp.innerHTML = 'Please complete each field';
    }
    else if (! isNaN(x) || x.length != 3) {
      outp.innerHTML = 'Enter a valid "Source symbol" Ex. USD';
    }
    else if (! isNaN(y) || y.length != 3) {
      outp.innerHTML = 'Enter a valid "Destination symbol" Ex. EUR';
    }
    else if (z.length != 10 || z.indexOf('-') < 0) {
      outp.innerHTML = 'Enter a valid date format Ex. 2022-04-07'; 
    }
    else {
      // TODO api call here
      fetch(baseURL)
        .then((res) => {return res.json();})
        .then((data) => {
          console.log(data);
          outp.innerHTML = data.error || data.rates; 
        });      
    }    
  };
  
  return (
    <div className="Widget">
        <form onSubmit={handleSubmit}>
          <h2>Currency Converter</h2>
          
          <p className="form-group">
            <label>Source symbol</label> 
            <input type="text" className="currency-source" placeholder="USD" size="1" maxLength="3" required />
          </p>
          <p className="form-group">
            <label>Destination symbol</label>
            <input type="text" className="currency-destination" placeholder="EUR" size="1" maxLength="3" required />
          </p>
          <p className="form-group">
            <label>Date</label>
            <input type="text" className="currency-date" placeholder="YYY-MM-DD" size="8" maxLength="10" required />
          </p>

          <button type="submit">Find rate</button>
          <button type="reset">Reset</button>

          <output className="conversion-result">Error message here...</output>
        </form>
    </div>
  );
}