import { CSSProperties } from "react";
import { Cylinder } from "../models/Cylinder";
import "../cylinder/cylinder.css"

interface CylinderProps {
    cylinder:Cylinder
}

function SingleCylinder ({ cylinder }: CylinderProps) {
    return (
        <div>
            <div className="cylinder"
            style = {{ width: `${cylinder.width}px`,
                       height: `${cylinder.height}px,`,
                       backgroundColor: `${cylinder.color}`}} />
        </div>
    )
}

export default SingleCylinder;

 // background: radialGradient('50% 40px at 50% 40px', '#0003 99.99%', '#0000 0'),
            //              radialGradient(`50% 40px at 50% ${calc(100% - 40px)}`, '#fff3 99.99%, #0000 0'),
            //              `${cylinder.color}` 
            //         } as CSSProperties} >
            
