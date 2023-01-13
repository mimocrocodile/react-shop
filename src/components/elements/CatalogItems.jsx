import { useContext } from "react"
import { Context }  from "./CatalogMenu"
function CatalogItems() {
    const {setHiddenMenu} = useContext(Context)
    const catalogTopics = ["Компьютеры", "Комплектующие", "Периферия", "Оргтехника", "Сетевое оборудование", "Расходые материалы", "Офисное оборудование"]
    return (
        <div className="catalog-menu">
            {catalogTopics.map((el, index) => (
                <div key={index} className="catalog-item" onMouseOver={() => setHiddenMenu('')}  >
                    {el}
                </div>
            ))}
        </div>
    )
}

export {CatalogItems}