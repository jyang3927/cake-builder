import { Layer } from "../models/Layer";
import { LayerAdd } from "./LayerAdd";
import '../css/cakeBuilder.css'

interface CakeBuilderProps {
    addLayer: (layer:Layer) => void; 
    cakeLayers:Layer[];
}

export function CakeBuilder({addLayer, cakeLayers}: CakeBuilderProps) {
    return(
        <div className="CakeBuild">
            <LayerAdd addLayer = {addLayer} cakeLayers={cakeLayers}/>
        </div>
    )
}