import{Route,Routes} from 'react-router-dom'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Header from './Header';
const App=()=>{
  return(
    <>
    <Routes>
      <Header/>
        <Route path='' element={<Home/>}/>
        <Route path='about'element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
         </Routes>
    </>
  )
}
export default App  

