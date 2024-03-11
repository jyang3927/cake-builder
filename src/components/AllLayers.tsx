// Gather array of objects and stack on top of one another
import { useState } from "react"
import { Layer } from "../models/Layer"
import SingleLayer from "./SingleLayer"
import { getLayers } from "../services/SampleLayers"
import '../css/fullcake.css'

function AllLayers() {
    const [layers, setLayers] = useState<Layer[]>(getLayers())
    
    return (
        <main>
            {layers.map(layer => <SingleLayer layer={layer}/>) }
        </main>
    )
}

export default AllLayers