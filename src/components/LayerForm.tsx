import { FormEvent, useState } from "react";
import { Colors } from "../enums/Colors";
import { Layer } from "../models/Layer";
import '../styles/cakeBuilder.css'

interface LayerFormProps {
    onAddLayer: (layer:Layer) => void; 
}

export function LayerForm ({onAddLayer}: LayerFormProps) {
    const [width, setWidth] = useState<number>(0); 
    const [height, setHeight] = useState<number>(0); 
    const [color, setColor] = useState<string>(''); 

    const [isdisplay, setIsDisplay] = useState<boolean>(true); 

    function displayFlex () {
        isdisplay === true ? setIsDisplay(false) : setIsDisplay(true)
    }

    function handleSubmit(e:FormEvent){
        e.preventDefault(); 

        onAddLayer({width: width, height: height, color: color})
        setWidth(0); 
        setHeight(0); 
        setColor('');
    }
    
    const displayStyle = {
        display: isdisplay ? 'flex' : 'none'
    }

    return(
        <div className="LayerForm" style={displayStyle}>
            <form className="AddLayerForm" onSubmit={handleSubmit}>
                <div className="InputDiv">
                    <div className="Inputs">
                        <label htmlFor="height">Height   </label>
                        <input id="height" name="height" type="number" value={height} onChange={(e) => setHeight(Number(e.target.value))}/>
                    </div>
                    <div className="Inputs">
                        <label htmlFor="width">Width   </label>
                        <input id="width" name="width" type="number" value={width} onChange={(e) => setWidth(Number(e.target.value))}/>
                    </div>
                    <div className="Inputs">
                        <label htmlFor="color">Color   </label>
                        <input id="color" type="color" onChange={(e) => {setColor(e.target.value)}} />
                    </div>
                </div>
                <div className="FormButtons">
                    <button className="FormButton" type="submit">Submit</button>
                    <button className="FormButton" onClick={() => displayFlex()}>Delete</button>
                </div>
            </form>

        </div>
    )
}

