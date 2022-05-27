import React from 'react';
import './App.css';
import Header from './Components/Header';
import Balance from './Components/Balance';
import Income from './Components/Income';
import Transaction from './Components/Transaction';
import Addtransaction from './Components/Addtransaction';
import {GlobalProvider} from './Context/GlobalState'

function App() {

 
  return (
    <GlobalProvider>
      <Header/>
      <div className='container'>
        <Balance/>
        <Income/>
        <Transaction/>
        <Addtransaction/>
      </div>
 
    </GlobalProvider>
  );
}




export default App;
