import { Link } from "react-router-dom"
import classes from './card.module.css'
function Card(props){

    return(
        <div className={classes.card} data-type={props.info.type}>
            <div className={classes["card-top"]}>
                {props.info.type != "" && <p className={`${classes["card-tag"]} ${classes[`card-tag-${props.info.type}`]}`}>{props.info.type == "discount" ? props.info.discountValue + "%" : "Новинка"}</p>}
                <Link to="/product">
                    <img src={`./src/assets/card${props.info.id}.png`} alt="" />
                </Link>
            </div>
            <div className={classes["card-bottom"]}>
                <Link to="/product" >
                    {props.info.desc}
                </Link>
                <p >{props.info.article}</p>
                {props.info.newprice != 0
                    ?
                    <div>
                        <p className={classes.newprice}>{props.info.newprice} т</p>
                        <p className={classes.oldprice}>{props.info.price} т</p>
                    </div>
                    :
                    <div>
                        <p className={classes.newprice}>{props.info.price } т</p>
                    </div>
                }
            </div>

        </div>
    )
}


export {Card}