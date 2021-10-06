import styled from "styled-components";

export const Container = styled.div`
    margin: 0 auto;
    width: 828px;
`

export const PhotoProfile =  styled.div`
    margin-left: 30px; 
    margin-right: 22px;
      img{  
        width: 42px;
        height: 42px;
        border-radius: 50%;
    }
`

export const Photo = styled.div`
    margin-bottom: 22px;
    img{
        width: 828px;
        height: 566px;
        border-radius: 8px;
    }
`

export const InfoUser = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
export const TextName = styled.div`
        display: flex;
        flex-direction: column;
        
        h1{
            font-size: 18px;
            line-height: 17px;
            font-weight: bold;
            margin-bottom: 10px;
        }

        h2{
            font-size: 16px;
            line-height: 15px;
            color: ${props => props.theme.color.grayIcon} 
        }
`

export const TextDescription = styled.div`
    width: 790px;
    font-weight: 500;
    font-size: 18px;
    line-height: 32px;
    color: #6E6D79;
    display: flex;
    margin: 0 auto;
`
