import styled from 'styled-components'

export const CardStyle = styled.section`
    section{
        height:12rem;
        width:16rem;
        background-color:#2F3644;
        margin-left:12px;
        margin-bottom:20px;
        display:flex;
        flex-direction:column;
        
        
        
        p{
            padding-left:20px;
            padding-right:20px;
            color:white;
            font-size:21px;
        }

        .first{
            padding-top:20px;
        }

        .last{
            padding-bottom:20px;
        }
    }
   `
   
export const CardContainer = styled.div`
    display:flex;
    width:100%;
    height:100vh;
    flex-wrap:wrap;
  background-color:#242732;
  align-items:center;
  justify-content:center;
   
  `