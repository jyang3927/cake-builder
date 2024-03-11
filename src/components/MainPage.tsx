import { useState } from "react";
import { Layer } from "../models/Layer";
import { CakeBuilder } from "./CakeBuilder";
import { LayerAdd } from "./LayerAdd";
import { LayerForm } from "./LayerForm";
import { Header } from "./Header";
import SingleCylinder from "./SingleLayer";
import SampleCake from "./SampleCake";
import AllLayers from "./AllLayers";
import "../css/cakeBuilder.css";
import SingleLayer from "./SingleLayer";
import LayerInfo from "./LayerInfo";

export function MainPage() {
  const [layers, setLayers] = useState<Layer[]>([]);
  //function that handles adding to use state of array -- this is the function that will pass down to cakebuilder
  function addLayer(layer: Layer) {
    setLayers([...layers, layer]);
  }
  //use state for all layers should go here
  return (
    <div className="MainPage">
      <div className="HeaderDiv">
        <img className="CakeImg" src="img/cake-svgrepo-com.svg" />
        <Header />
        <img className="CakeImg" src="img/cake-svgrepo-com.svg" />
      </div>
      <div className="BodyDiv">
        <div className="LayersDiv">
          <CakeBuilder addLayer={addLayer} />
        </div>
        <div className="LayerInfoDiv">
          <LayerInfo layers={layers} setLayers={setLayers} />
        </div>
      </div>
    </div>
  );
}
