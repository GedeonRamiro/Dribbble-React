import styled from 'styled-components'

export const Text = styled.div`
   position: absolute;
    top: 5%;
    left: 85%;
    h2{
        line-height: 17px;
    }
    span{
        color: ${props => props.theme.color.blue};
        line-height: 17px;
        cursor: pointer;
    }
`

export const DivPassword = styled.div`
    display: flex;
    justify-content: space-between;
    
    span{
        color: ${props => props.theme.color.blue};
        cursor: pointer;
    }
`