import React from 'react';
import  ReactDOM  from 'react-dom/client';
import { BrowserRouter , Routes, Route} from "react-router-dom";
import Footer from './components/layout/footer/Footer';
import Navbar from './components/layout/navbar/Navbar';
import About from './components/pages/about/About';
import Main from './components/pages/main/Main';
import Services from './components/pages/servicess/Services';
import Shop from './components/pages/shoop/Shop';
import Pagess from './components/pages/pagesss/Pagess';
import Blog from './components/pages/blog/Blog';
import Contact from './components/pages/contact/Contact';
import Error from "./components/error/Error"
const App =()=>{
return(
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' exact element={<Main/>} />
        <Route path='*' exact element={<Error/>} />
        <Route path='/about'  element={<About/>} />
        <Route path='/services'  element={<Services/>} />
        <Route path='/shop'  element={<Shop/>} />
        <Route path='/pagess'  element={<Pagess/>} />
        <Route path='/blog'  element={<Blog/>} />
        <Route path='/contact'  element={<Contact/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    )
}
export default App;