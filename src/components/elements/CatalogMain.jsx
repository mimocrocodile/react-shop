function CatalogMain({visibility}) {
    const catalogMain = [
        {title: "Перифирия", arr:["Накопители", "Мониторы", "Стабилизаторы и ИБП", "Мыши", "Клавиатуры", "USB flash"]},
        {title: "Электронное оборудование для торговли", arr:["Принтеры чеков и этикеток", "Торговые весы", "Сканеры штрих-кода", 
                                                              "POS-системы", "Счетчики банкнот", "Детекторы банкнот"]}
    ]
    const catalogMain2 = [
        {title: "Блоки питания", arr:["Накопители", "Мониторы", "Стабилизаторы и ИБП", "Мыши", "Клавиатуры", "USB flash"]},
        {title: "Мониторы", arr:["Принтеры чеков и этикеток", "Торговые весы", "Сканеры штрих-кода", "POS-системы", "Счетчики банкнот", "Детекторы банкнот"]}
    ]
    return (
        <div  className={`catalog-main ${visibility}`}>
            {catalogMain.map((el, index) => (
                <div key={index}>
                    <h3>{el.title}</h3>
                    {el.arr.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))}
                </div>
            ))}
        </div>
    )
}

export { CatalogMain }