import React, { version } from 'react';
import ReactDOM from 'react-dom/client';
import './cssFiles/index.css';
import Header from './components/Header'
import Main from './components/Main';
import Footer from './components/Footer'

import { color, log, red, green, cyan, cyanBright } from 'console-log-colors';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);


function App(){
    return (
      <div className='app-container'>
         <Header />
         <Main />        
         {/* <Footer /> */}
      </div>
      );
}


myLog("Hello")



function myLog(str){
    console.log(red(str));
}

//Color dark #1F1D26
//Color light dark #24262E
//Color blue  #60D3F1

//ReactFacts  --  React Course - Procet 1