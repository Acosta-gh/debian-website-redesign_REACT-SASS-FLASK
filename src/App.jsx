// Importación de las herramientas necesarias para el enrutamiento con React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";       
import NoPage from "./pages/NoPage";  
import Layout from "./components/Layout";  

import Blog from "./pages/Blog";  
import Micronews from "./pages/Micronews";  
import Planet from "./pages/Planet";  

import './styles/styles.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />          
          <Route path="blog" element={<Blog />} />  
          <Route path="micronews" element={<Micronews />} />      
          <Route path="planet" element={<Planet />} />      
          <Route path="*" element={<NoPage />} />         
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// https://www.w3schools.com/react/react_router.asp