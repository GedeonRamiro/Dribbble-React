import styled from "styled-components";

 interface IProps {
    width?: string;
    height?: string;
    disabled?: boolean
    isDisabled?: boolean;
 }


 const Button = styled.button<IProps>`
    width: ${props => props.width || '78px'};
    height: ${props => props.height || '37px'};
    background: ${props => props.theme.color.pink};
    border-radius: 5px;
    outline: none;
    border: none;
    color: #fff;
    font-weight: 700;
    font-size: 14px;
    opacity: ${props => props.disabled || props.isDisabled ? 0.5 : 1 };
    cursor: ${props => props.disabled || props.isDisabled ? 'default' : 'pointer' };
    pointer-events: ${props => props.disabled || props.isDisabled ? 'none' : 'all' };

`

export default Button