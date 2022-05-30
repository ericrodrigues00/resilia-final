import React, { useState, useEffect } from "react"
import axios from "axios"
import { CardContainer, CardStyle } from "./styled"



export function Card(){
   

let [ books, setBooks] = useState([])

    useEffect(() => {
      axios.get("https://api-bookstore-resilia.herokuapp.com/books")  
      .then((response) => {
          setBooks(response.data.books)
        console.log(response)
      })
      .catch((err) => {
          console.log(err)
    })

    }, [])

    return(
      <CardContainer>
        {books.map((book, key) => {
          console.log(key)
                return(
                  
                      <CardStyle>
                          <section>
                              <p className="first">Title: {book.title}</p>
                              <p>Language: {book.language}</p>
                              <p>Pages: {book.num_pages}</p>
                              <p className="last">Publisher:  {book.publisher}</p>
                          </section>
                      </CardStyle>
                  
                )
          })}
      </CardContainer>
    )
}