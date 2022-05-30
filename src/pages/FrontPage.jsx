import React from "react";
import { Card } from "../components/Card/Card";
import { Navbar } from "../components/Header/Header";
import { Iniciar } from "../components/Landing/Landing";
import Post from "../components/Post/Post";
import GlobalStyle from "../styles/GlobalCSS";
export function FrontPage(){
    return(
        <section>
            <GlobalStyle/>
            <Navbar/>
            <Iniciar/>
        </section>
        
        
    )
}

export function GetPage(){
    return(
        <section>
            <GlobalStyle/>
            <Navbar/>
            <Card/>
        </section>
        
    )
    
}

export function PostPage(){
    return(
        <section>
            <GlobalStyle/>
            <Navbar/>
            <Post/>
        </section>
        
    )
    
}