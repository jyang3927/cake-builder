import { useState } from "react";
import { Layer } from "../models/Layer";
import { CakeBuilder } from "./CakeBuilder";
import { LayerAdd } from "./LayerAdd";
import { LayerForm } from "./LayerForm";
import { Header } from "./Header";
import SingleCylinder from './SingleLayer';
import '../css/cakeBuilder.css'
import SingleLayer from "./SingleLayer";

export function MainPage(){
    const [layers, setLayers] = useState<Layer[]>([]); 

    //function that handles adding to use state of array -- this is the function that will pass down to cakebuilder
    function addLayer(layer:Layer){
        setLayers([...layers, layer]);
    }
    //use state for all layers should go here
    return(
        <div className="MainPage">
            <div className="HeaderDiv">
                <img className="CakeImg" src="img/cake-svgrepo-com.svg"/>
                <Header/> 
                <img className="CakeImg" src="img/cake-svgrepo-com.svg"/>
            </div>
            <div className="BodyDiv">
                <div className="LayersDiv">
                    <CakeBuilder addLayer = {addLayer} cakeLayers = {layers}/>
                </div>
                <div className="CakeDiv">
                    <div className="CakeLayersDisplay">{layers.map(layer => <SingleLayer layer={layer}/>)}</div>
                </div>
            </div>
        </div>
    )
}