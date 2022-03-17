import React, { useState } from 'react'
import './App.css';
import StripeContainer from './components/StripeContainer';
import spatula from "./assets/istockphoto-1222538014-612x612.jpg"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from './components/Paypal/Checkout';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Multilanguage from './components/multilanguage/Multilanguage';
import DynamicForm from './components/form/DynamicForm';
function App() {
  const [showitem, setShowitem] = useState(false)
  return (
    <div className="App">
      <DynamicForm />
      <Multilanguage />
      <h2>purchase</h2>
      {showitem ? <StripeContainer /> : <><h2>$10.00</h2><img src={spatula} alt="spatula" />
        <button onClick={() => setShowitem(true)}>payment</button></>}
      <PayPalScriptProvider
        options={{ "client-id": process.env.REACT_APP_APP_ID }}
      >
        <Router>
          <Routes>
            <Route index element={<Checkout />} />
          </Routes>
        </Router>
      </PayPalScriptProvider>
    </div>
  );
}

export default App;
