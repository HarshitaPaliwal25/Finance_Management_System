import React from 'react'
import styled from 'styled-components'
function Button({name,onClick,bg,bPad,bRad,color}) {
  return (
    <ButtonStyled style={{
       background: bg,
       padding: bPad,
       borderRaius:bRad,
       color: color,
    }} onClick={onClick}>
        {name}
    </ButtonStyled>
  )
}
const ButtonStyled = styled.button`
outline:none;
border:none; 
font-family:inherit;
font-size:inherit;
display:flex;
align-items:center;
gap: 5rem;
transition: all .4s ease-in-out;
`;
export default Button
