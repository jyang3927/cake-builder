import { useState } from "react";
import { Layer } from "../models/Layer";
import { LayerForm } from "./LayerForm";

interface LayerAddProps {
    addLayer: (layer: Layer) => void; 
}
export function LayerAdd({addLayer}: LayerAddProps){
    const [showForm, setShowForm] = useState<boolean>(false); 
    
    return(
        <div className="LayerAdd">
            <button className="AddLayerBtn" onClick = {() => showForm === false ? setShowForm(true): setShowForm(false)}>Add Layer</button>
            {showForm === true ? <LayerForm onAddLayer = {addLayer}/> : null}
        </div>
    )
}