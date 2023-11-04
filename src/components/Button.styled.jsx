import styled from 'styled-components';
import ButtonStyled from './button';
import { theme } from './Threme';

export const StyledButton = styled.button`
    background-color: ${(prop) => prop.backgroundColor ? prop.backgroundColor: 'red'};
    width:120px;
    height: ${({ them }) => theme.sizes.xxl};

    &:hover{
        background-color:pink;
    }
`


export const Button2 = styled(ButtonStyled)`
    background-color: blue;
`