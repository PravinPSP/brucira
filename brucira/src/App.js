import logo from './logo.svg';
import './App.css';
import HeaderComponent from './component/HeaderComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeComponent from './component/HomeComponent';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <HeaderComponent/>

      <Routes>
      <Route path="/"  element={<HomeComponent/>} />
        <Route path="/about-us"  element={<h1>ABout us page</h1>} />
        <Route path="/page-2"  element={<h1>trust us page</h1>} />
        <Route path="/page-3"  element={<h1>ecosystem page</h1>} />
        <Route path="/page-4"  element={<h1>new page</h1>} />
        <Route path="/page-5"  element={<h1>news page</h1>} />

      </Routes>
      
      <Footer/>
      </BrowserRouter>
      
   
      
    </div>
  );
}

export default App;
