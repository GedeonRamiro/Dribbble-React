import styled from "styled-components";

 interface IProps {
    width?: string;
    height?: string;
 }

 const Button = styled.button<IProps>`
    width: ${props => props.width || '78px'};
    height: ${props => props.height || '37px'};
    background: ${props => props.theme.color.pink};
    border-radius: 5px;
    outline: none;
    border: none;
    cursor: pointer;
    color: #fff;
    font-weight: 700;
    font-size: 14px;
`

export default Button