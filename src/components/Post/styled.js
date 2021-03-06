import styled from 'styled-components'

export const FormStyle = styled.section`

main {
    display: flex;
    justify-content: center;
    background-color:#242732;
    height:100vh;
    padding: 3rem 0;
}

.card-post {
    background-color: #2F3644;
    padding: 30px 70px;
    border-radius: 15px;
    height:fit-content;
}

.card-post h1{
    
    font-weight: 800;
    text-align: center;

    color: #D2DAF5;

    font-size: 3rem;
    margin-bottom: 5px;
}

.line-post {
    height: 2px;
    background-color: #3E445B;
}

.card-body-post {
    margin-top: 25px;

}

.fields {
    margin-bottom: 20px;
}

.fieldsOff{
    display:none;
}

label {
    display: block;
    margin-bottom: 7px;
    font-size: 1.2rem;

    color: #D2DAF5;

    
}

input {
    width: 100%;
    border-radius: 10px;
    border: 0;
    outline: 0;

    font-size: 1.2rem;

    padding-left: 15px;
}

input {
    height: 45px;
}


.btn-post{
    margin-top: 30px;
    text-align: center;

}

.btn-post button{
    font-family: Heebo;
    font-weight: 800;
    font-size: 1.3rem;

    padding: 5px 50px;
    color: #fff;
    background-color: #3DECB1;

    border: 0;
    border-radius: 10px;

    cursor: pointer;

}

.error-message {
    color: rgb(240, 47, 47);
}







`