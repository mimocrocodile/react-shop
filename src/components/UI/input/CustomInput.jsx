import { useState } from "react"
import classes from "./custom-input.module.css"
function CustomInput(){
    const [search, setSearch] = useState('')
    return(
        <input onChange={(e)=> setSearch(e.target.value)} className={classes.input} type="text" placeholder="Поиск" />
    )
}

export {CustomInput}