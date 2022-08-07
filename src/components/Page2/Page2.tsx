import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {

}

const Page2: React.FC<IProps> = () => (
  <div>
    <h1>
      <img src="../../assets/images/arrow_left.svg" alt="back" />
      <Link to="/">Page 2</Link>
    </h1>
  </div>
);

export default Page2;
