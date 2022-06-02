import React from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { FormStyle } from './styled';


const validationPost = yup.object().shape({
    title: yup.string().required("This is a required field").max(40, "This field must have less than 40 characters."),
    language: yup.string().required("This is a required field").max(40, "This field must have less than 40 characters."),
    num_pages: yup.number().required("This is a required field").positive("Page numbers must be postive."),
    publication_date: yup.string().required("This is a required field"),
    publisher: yup.string().required("This is a required field").max(40, "This field must have less than 40 characters."),
})

function Post() {

   

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationPost)
    })

    const addPost  = data => axios.post("https://api-bookstore-resilia.herokuapp.com/books", data)
    .then(() => {
        alert("Book Added!")
       
    })
    .catch(() => {
        console.log("DEU ERRADO")
    })



    return(
        <FormStyle>

        
        <div>
            

            <main>

                <div className="card-post" >

                    <h1>Add Book</h1>
                    <div className="line-post" ></div>

                    <div className="card-body-post" >

                        <form onSubmit={handleSubmit(addPost)} >

                            <div className="fields" >
                                <label>Title</label>
                                <input type="text" name="title" {...register("title")} />
                                <p className="error-message">{errors.title?.message}</p>
                            </div>
                            <div className="fieldsOff" >
                                <label>Author ID</label>
                                <input type="text" value="sample" name="author_id" {...register("author_id")} />
                                <p className="error-message">{errors.title?.message}</p>
                            </div>
                            <div className="fields" >
                                <label>Language</label>
                                <input type="text" name="language" {...register("language")} />
                                <p className="error-message">{errors.language?.message}</p>
                            </div>

                            <div className="fields" >
                                <label>Number of pages</label>
                                <input type="number" name="num_pages" {...register("num_pages")} ></input>
                                <p className="error-message">{errors.num_pages?.message}</p>
                            </div>
                            <div className="fieldsOff" >
                                <label>Pub Date</label>
                                <input type="text" name="publication_date" value="2022-12-12T00:00:00.000Z" {...register("publication_date")} ></input>
                                <p className="error-message">{errors.publication_date?.message}</p>
                            </div>
                            <div className="fields" >
                                <label>Publisher</label>
                                <input type="text" name="publisher" {...register("publisher")} ></input>
                                <p className="error-message">{errors.publisher?.message}</p>
                            </div>
                            

                            <div className="btn-post" >
                                
                                <button type="submit">Send</button>
                                
                                
                            </div>

                        </form>

                    </div>

                </div>

            </main>

        </div>
        </FormStyle>
    )
}

export default Post
