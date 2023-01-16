import { Outlet, Link } from 'react-router-dom'
import App from './App'
import { Header } from './components/elements/header'
import { Main } from './components/elements/MainPage'
function Layout() {
    return (
        <>
        <Header/>

        {/* <main className="block">

        </main> */}
        {/* <Main></Main> */}
        <Outlet/>
        </>
    )
}

export {Layout}


