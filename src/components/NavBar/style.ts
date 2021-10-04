import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 30px;
`

export const LinkNavBar = styled.div`
    display: flex;
    align-items: center;

    a{
        font-size: 14px;
        font-weight: 500;
        line-height: 17px;
        margin-left: 20px;
    }
`

export const InfoNavBar = styled.div`
    display: flex;
    align-items: center;
`
export const IconInfo = styled.div`
    color: ${props => props.theme.color.grayIcon};
    margin-right: 20px;

    i{
        margin-left: 20px;
        font-size: 25px;
        cursor: pointer;
    }
`

export const ImageProfile = styled.div`
    margin-right: 20px;
    img{
        width: 42px;
        height: 42px;
        border-radius: 50%;
    }
   
`
