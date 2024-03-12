import { CSSProperties } from "react";
import "../css/fullcake.css"
import { Layer } from "../models/Layer";

interface LayerProps {
    layer:Layer
}

function SingleLayer ({ layer }: LayerProps) {
    return (
        <div className="layer"
                style={{width: `${layer.width}%`,
                        height: `${layer.height}px`,
                        backgroundColor: `${layer.color}`,
                        borderRadius: `50% / ${layer.width * .35}px`,
                        padding: `${layer.width* .35}px 0`,
                        margin: `-${layer.width * .35}px 0`, 
                        border: '1px solid black'
                        }}>
            <div className="top"
                style={{height: `${layer.width * .7}px`}}>
            </div>   
        </div>
    )
}

export default SingleLayer;
            
