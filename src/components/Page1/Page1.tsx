import React from 'react'
import { Link } from 'react-router-dom'
interface IProps {

}

const Page1: React.FC<IProps> = ({ }) => {

  return <div>
    <h1><Link to={'/page2'} >Page 1</Link></h1>
  </div>
}

export default Page1