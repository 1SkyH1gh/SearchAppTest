import React from 'react';
import {FoundOrDelete} from "./components/FoundOrDelete";
import {FormSearch} from "./components/FormSearch";
import {FullSavingWords} from "./components/FullSavingWords";
import {AllKeyword} from "./components/AllKeyword";
import {useState} from 'react'



import './Styles.css'
import {Footer} from "./components/Footer";
const App: React.FC = () => {


  return (
    <div className='container'>
      <FoundOrDelete />

      <FormSearch/>
      <AllKeyword/>
      <Footer/>
    </div>
  );
}

export default App;
