import { useState } from "react"

function CylinderInputs () {
    // useState for Add Layer Here
    const [addLayerHereState, setAddLayerHereState] = useState<boolean>(false)

    const addHereStyle = {display: addLayerHereState? 'none': 'block'}

    return (
        <div>
            <button style = {addHereStyle} onClick={() =>
                 addLayerHereState === false ? setAddLayerHereState(true): setAddLayerHereState(false)}>Add Layer Here</button>
            <form action="">
                <input type="number" />
                <input type="number" />
                <input type="text" />
                <button type="submit">Add Layer</button>
            </form>
        </div>
    )
}

export default CylinderInputs