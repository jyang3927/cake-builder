import { useState } from "react";
import { Layer } from "../models/Layer";
import { LayerForm } from "./LayerForm";
import { LayerAdd } from "./LayerAdd";
import '../styles/cakeBuilder.css'

interface CakeBuilderProps {
    addLayer: (layer:Layer) => void; 
}

export function CakeBuilder({addLayer}: CakeBuilderProps) {
    return(
        <div className="CakeBuild">
            <LayerAdd addLayer = {addLayer}/>
        </div>
    )
}