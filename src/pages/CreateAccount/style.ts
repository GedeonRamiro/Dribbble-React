import styled from 'styled-components'

export const DivBlock = styled.div`
    display: flex;
    justify-content: space-between;
`

export const InputName = styled.div`
    display: flex;
    flex-direction: column;
`
export const Text = styled.div`
   position: absolute;
    top: 5%;
    left: 85%;
    h2{
        line-height: 17px;
    }
    span{
        color: #137ECB;
        line-height: 17px;
        cursor: pointer;
    }

`
export const Terms = styled.div`
    display: flex;
    margin: 10px 0 25px;

    input[type=checkbox] {
        margin-right: 20px;
        transform: scale(1.5);
    }

    p{
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 17px;
    }

    h2{
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 17px;
        margin-top: 61px;
    }

    span{
        color: #3F96D4;
        cursor: pointer;
    }
`