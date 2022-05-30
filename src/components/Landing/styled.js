import styled from 'styled-components'

export const MainBg = styled.div`
background-color:#242732;
height:fit-content;
color:white;

section{
    display: flex;
    align-items: center;
    justify-content: space-around;

}
`

export const LandingText = styled.div`

    height:100vh;
    width:fit-content;
    padding-top:3rem;
    display: flex;
    flex-direction:column;
    justify-content: space-evenly;


    h3{
    color:#73ED00;
    font-family: 'Syncopate', sans-serif;
    width:25vh;
    font-size:52px;
    }

    p{
    font-size:21px;
    font-weight:bolder;
    font-family: 'Syncopate', sans-serif;
}

`

export const MainImg = styled.div`

img{
    height:22rem;
    width:26rem;
}

`