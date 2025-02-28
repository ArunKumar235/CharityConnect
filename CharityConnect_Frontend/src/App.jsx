import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Charities from "./Components/Charities";
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from "./Components/Footer";
import Login from './Components/Login';
import Signup from './Components/Signup';


function App() {
  return (
    <main>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/charities' element={<Charities/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
