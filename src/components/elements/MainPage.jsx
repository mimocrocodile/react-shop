import { useEffect, useState } from "react"
import { Carousel } from "./Carousel"
import data from "../../../base.json"
function Main(){
    // let arr = [...data]
    const [info,setInfo] = useState([])
    const [prevType, setType] = useState('')

    useEffect(()=>{
        setInfo([...data])
    },[])

    const handleFilter = (type) =>{
        if(prevType != type){
            setType(type)
            setInfo([ ...data].filter(el => el.type == type))
        }
        else{
            setType('')
            setInfo([ ...data])
        }

    }

    return(
        <div className="main">
            <div className="activities">
                <button  className="btn btn-red" onClick={() => handleFilter("discount")}  >Скидки</button>
                <button className="btn btn-green" onClick={() => handleFilter("new")}>Новинки</button>
                <button className="btn " >Акции</button>
            </div>
            <Carousel  base={info}/>
        </div>
    )
}


export {Main}