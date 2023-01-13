import { useState, createContext } from 'react'
import { CatalogItems } from './CatalogItems'
import { CatalogMain } from './CatalogMain'

function CatalogMenu(){
    const [hiddenItem, setHiddenItem] = useState('hidden')
    const [hiddenMenu, setHiddenMenu] = useState('hidden')
   
    
    return(
        <>
         <div className="header-catalog" onMouseOver={() =>setHiddenItem('')} onMouseLeave ={()=>setHiddenItem('hidden')}>
                    <button className='catalog-btn'>Каталог</button>
                    <div className={`catalog-container ${hiddenItem}`} onMouseLeave = {()=>(setHiddenMenu('hidden'), setHiddenItem('hidden') )}  >
                    <Context.Provider value={{
                        setHiddenMenu
                    }}>
                        <CatalogItems />
                        <CatalogMain  visibility={hiddenMenu}/>
                    </Context.Provider>
                    </div>

            </div>
        </>
    )
}


export {CatalogMenu}
export  const Context = createContext()