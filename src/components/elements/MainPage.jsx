import { Carousel } from "./Carousel"
function Main(){


    let arr = []
    const getCards = (cards)=>{
        arr = cards
    }
    // arr = getCards
    // console.log(arr)
    // const getFilter = (arr, type)=>{
    //     arr.filter(el => el.dataType != type)
    // }
    const filterCards = (type) =>{
        arr.filter(el=> el.props.type != type)
        console.log(arr)
    }
    return(
        <div className="main">
            <div className="activities">
                <button className="btn btn-red" onClick={() => filterCards("discount")}>Скидки</button>
                <button className="btn btn-green" >Новинки</button>
                <button className="btn " >Акции</button>
            </div>
            <Carousel filterItems={getCards}/>
        </div>
    )
}


export {Main}