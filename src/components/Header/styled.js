import styled from 'styled-components'

export const HeaderBg = styled.div`
height:72px;
background-color: #2F3644;
display: flex;
align-items: center;
justify-content: space-around;
font-family: 'Syncopate', sans-serif;
h3{
    font-size:32px;
    color:white;
    
    
}

ul{
    list-style:none;
    text-decoration:none;
    color:white;
    font-size:22px;
    display:flex;

        li{
            padding:12px;
            font-size:27px;
        font-weight:bolder;
        }

    .link{
        text-decoration:none;
        color:white;
        
    }

    .link:hover{
        transition: 0.2s;
        color:#73ED00;
    }

    .link h3{
        text-decoration:none;
    }


}



`;

