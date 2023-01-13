import { useState } from 'react'
function CatalogMenu(){
    const [hidden, setHidden] = useState('hidden')
    const [hiddenItem, setHiddenItem] = useState('hidden')
     const catalogMain = [
        {title: "Перифирия", arr:["Накопители", "Мониторы", "Стабилизаторы и ИБП", "Мыши", "Клавиатуры", "USB flash"]},
        {title: "Электронное оборудование для торговли", arr:["Принтеры чеков и этикеток", "Торговые весы", "Сканеры штрих-кода", "POS-системы", "Счетчики банкнот", "Детекторы банкнот"]}
    ]
    const catalogTopics = ["Компьютеры", "Комплектующие", "Периферия", "Оргтехника", "Сетевое оборудование", "Расходые материалы", "Офисное оборудование"]
    return(
        <>
         <div className="header-catalog" onMouseOver={() =>setHidden('')} onMouseOut={() => setHidden('hidden')} >
                    <button className='catalog-btn'>Каталог</button>
                    <div className={`catalog-container ${hidden}` } onMouseOut={() => (setHidden('hidden'))}>
                        <div className="catalog-menu">
                            {catalogTopics.map((el, index)=>(
                                <div key={index} className="catalog-item" onMouseOver={() => setHiddenItem('')  } >
                                    {el}
                                </div>
                            ))}
                        </div>
                        <div className={`catalog-main ${hiddenItem}`}  >
                            {catalogMain.map((el,index)=>(
                                <div key={index}>
                                    <h3>{el.title}</h3>
                                    {el.arr.map((item, index)=>(
                                        <p key={index}>{item}</p>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

            </div>
        </>
    )
}


export {CatalogMenu}