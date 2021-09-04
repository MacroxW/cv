import React from 'react';
import './App.scss';
import { Grid, Paper, Divider } from '@material-ui/core';
import Menu from '../Menu/Menu';
import Formacion from '../Formacion/Formacion';
import Skills from '../Skills/Skills';
import BaseCard from '../BaseCard/BaseCard';
import AcercaDe from '../AcercaDe/AcercaDe';


function App() {
  return (
    <div className="portafolio">
      <Menu/>


      <div className="main-content">
        <BaseCard title="Acerca De Mí" body={<AcercaDe/>} />
        <BaseCard title="Formación" body={<Formacion />} />
        <BaseCard title="Habilidades" body={<Skills />} />
      </div>
    </div>
  );
}

export default App;
