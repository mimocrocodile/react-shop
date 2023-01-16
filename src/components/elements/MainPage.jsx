import { useState } from "react"
import { Carousel } from "./Carousel"
function Main(){


    let arr = []
    const [type, setType ] = useState('')
    console.log(type)
    return(
        <div className="main">
            <div className="activities">
                <button className="btn btn-red" onClick={() => setType("discount")}>Скидки</button>
                <button className="btn btn-green" onClick={() => setType("new")}>Новинки</button>
                <button className="btn " >Акции</button>
            </div>
            <Carousel type={type}/>
        </div>
    )
}


export {Main}