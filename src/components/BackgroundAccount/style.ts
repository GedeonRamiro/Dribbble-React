import styled from 'styled-components'

export const Container = styled.div `
    display: flex;
    height: 100vh;
`

export const Text = styled.div`
   position: absolute;
    top: 5%;
    left: 85%;
    h2{
        line-height: 17px;
    }
    span{
        color: ${props => props.theme.color.BlueText};
        line-height: 17px;
        cursor: pointer;
    }

`



export const BackgroundAccountImage = styled.div`
   img{
        height: 100%;
        width: 100%;
        object-fit: cover;
   }
`


export const ContentAccount = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;

`

export const FormAccount = styled.div`
    display: flex;
    flex-direction: column;
        
        h1{
            font-size: 24px;
            font-style: normal;
            font-weight: 800;
            line-height: 29px;
            margin-bottom: 25px;
        }

        h4{
            font-size: 14px;
            font-style: normal;
            font-weight: 700;
            line-height: 17px;
        }
    
`