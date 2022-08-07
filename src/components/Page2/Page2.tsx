import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StH = styled.h1`
  color: 'red';
  background: blue;
`;
interface IProps {

}

const Page2: React.FC<IProps> = () => (
  <div>
    <StH>
      123123111
      <img src="../../assets/images/arrow_left.svg" alt="back" />
      <Link to="/">Page 2</Link>
    </StH>
  </div>
);

export default Page2;
