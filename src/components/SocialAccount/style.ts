import styled from 'styled-components'

export const ButtonSocial = styled.div`
    display: flex;
    justify-content: space-between;
`

export const ButtonGoogle = styled.button`
    display: flex;
    align-items: center;
    width: 294px;
    height: 48px;
    background: ${props => props.theme.color.blue};
    border-radius: 5px;
    border: none;
    font-weight: 700;
    line-height: 17px;
    font-size: 14px;
    outline: none;
    cursor: pointer;
    p{
        color: #fff;
        background-color: transparent;
        margin-left: 50px;
    }
`

export const StartIcon = styled.div`
    margin-left: 17px;
    color: #fff;
    background-color: transparent;

`

export const ButtonTwitterFace = styled.button`
    margin-left: 29px;
    width: 48px;
    height: 48px;
    background: ${props => props.theme.color.gray};
    border-radius: 5px;
    border: none;
    color: ${props => props.theme.color.grayIcon};
    cursor: pointer;
    outline: none;
`

export const DivLine = styled.div`
    display: flex;
    align-items: center; 
    justify-content: space-between;
    margin: 23px 0;
    color: #878888;
    
`

export const Line = styled.div`
   width: 185px;
   border-bottom: 1px solid #CFCFCF
`

