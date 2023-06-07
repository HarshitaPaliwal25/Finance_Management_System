

import React from 'react';
import styled from 'styled-components';
import leftImage from './images/financelogo.png';
// import rightImage from './images/financelogo.png';

function Header() {
  return (
    <HeaderContainer>
      <LeftImage src={leftImage} alt="Left Image" />
      <HeaderText>FMS</HeaderText>
      {/* <RightImage src={rightImage} alt="Right Image" /> */}
     
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  height: 15vh;
  padding: 0 20px;
`;

const LeftImage = styled.img`
  height: 80%;
  margin-right: 20px;
`;

// const RightImage = styled.img`
//   height: 80%;
//   align-items:right;
//   margin-left:600px;
// `;

const HeaderText = styled.h3`
  color: #002d62;
  margin-top: 10px;
  font-style: italic;
`;

export default Header;

