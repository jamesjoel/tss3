import { Route, Routes } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Header from './Header';
import Help from './Help';
let App = ()=>{
    return(
        <>
            <Header />

            <Routes>
                <Route path='' element={ <Home /> } />
                <Route path='about' element={ <About /> } />
                <Route path='contact' element={ <Contact /> } />
                <Route path='help' element={ <Help /> } />
            </Routes>
        </>
    )
}

export default App;