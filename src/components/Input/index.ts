import styled from "styled-components";

const Input = styled.input`
    width: ${props => props.width || '432px'};
    height: 48px;
    background: #E8E8E8;
    border-radius: 5px;
    border: none;
    outline: none;
    font-size: 18px;
    padding: 0 10px;
    margin-top: 8px;
    margin-bottom: 25px;
    
    &:focus {
        background-color: #fff;
        border-radius: 4px;
        border: solid 1px  #f5a3c5;
        box-shadow: 0 0 0 4px #fce8f0;
        transition: .2s;
    }
`

export default Input