import "../css/fullcake.css"

interface Cylinder {
   // id: number
    width:number
    height:number
    color:string
    width2:number
    height2:number
    color2:string
}

function SampleCake ({ width, height, color, width2, height2, color2 }: Cylinder) {
    return (
        <main>
            <div className="layer"
                style={{width: `${width}%`,
                        height: `${height}px`,
                        backgroundColor: `${color}`,
                        borderRadius: `50% / ${width * .35}px`,
                        padding: `${width * .35}px 0`,
                        margin: `-${width * .35}px 0`
                        }}>
                <div className="top"
                style={{height: `${width * .7}px`}}>
                </div>   
            </div>
            <div className="layer"
                style={{width: `${width2}%`,
                        height: `${height2}px`,
                        backgroundColor: `${color2}`,
                        borderRadius: `50% / ${width2 * .35}px`,
                        padding: `${width2 * .35}px 0`,
                        margin: `-${width2 * .35}px 0`}}>
                <div className="top"
                style={{height: `${width2 * .7}px`}}></div>
            </div>
        </main>
    )
}

export default SampleCake