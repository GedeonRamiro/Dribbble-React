import styled from 'styled-components'

export const Container = styled.div`
     margin: 57px 30px;
`

export const ImgPost = styled.img`
    width: 370px;
    height: 300px;
    object-fit: cover;
    border-radius: 4px;
`

export const InfoPost = styled.div`
    display: flex;
    align-items: center;
    margin-top: 16px;

    img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }

    h1{
        font-size: 16px;
        line-height: 12px;
        color: #0D0C22;
        margin-left: 12px;
    }
`