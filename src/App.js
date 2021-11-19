import React from 'react';

// import './App.css';

import {Header,Footer,Blog,Possibility,WhatGPT3} from './Containers';
import {Cta,Brand,NavBar} from './Components';
//styles
import { GlobalStyle } from './GlobalStyle';

const App=()=>(

  <div className="App">
    <div className="gradient__bg">
    <NavBar/>
    <Header/>
    </div>
      <Brand/>
      <WhatGPT3/>
      {/* <Features/> */}
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
      <GlobalStyle/>
    </div>
)

export default App;
