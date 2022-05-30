import React from "react";
import { Pig } from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Iniciar } from './components/Landing/Landing'
import { FrontPage } from "./pages/FrontPage";
import { GetPage } from "./pages/FrontPage";
import Post from "./components/Post/Post";
import { PostPage } from "./pages/FrontPage";
export function App() {
  return(
 
    
   
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage/>}/>
        <Route path="/books" element={<GetPage/> }/>
        <Route path="/post" element={<PostPage/> }/>
      </Routes>
   </BrowserRouter>
 
   
  )
  
}


