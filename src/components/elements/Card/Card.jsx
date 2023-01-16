import { Link } from "react-router-dom"
import classes from './card.module.css'
function Card(props){
    return(
        <div className={classes.card} data-type={props.type}>
            <div className={classes["card-top"]}>
                <Link to="/product">
                    <img src={`./src/assets/card${props.number}.png`} alt="" />
                </Link>
            </div>

            <div className={classes["card-bottom"]}>
                <Link to="/product" >
                    Тройной дисплей Wavlink USB C 4K 12 в 1 Док-станция USB C с DP, HDMI и VGA ...
                </Link>
                <p >Арт: 25025</p>
                <p >16 500 т</p>
            </div>

        </div>
    )
}


export {Card}