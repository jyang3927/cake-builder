import React from 'react';
import logo from './logo.svg';
import './App.css';
import CylinderInputs from './components/CylinderInputs';
import SingleCylinder from './components/SingleLayer';
import SampleCake from './components/SampleCake';
import AllLayers from './components/AllLayers';

function App() {
  return (
    <div>
      <AllLayers></AllLayers>
    </div>
  );
}
//<SampleCake
//width = {100} height = {100} color = {'red'} width2 = {90} height2 = {90} color2 = {'blue'}></SampleCake>

export default App;
