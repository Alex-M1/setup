import React from 'react'
import { Link } from 'react-router-dom'
interface IProps {

}

const Page2: React.FC<IProps> = ({ }) => {

  return <div>
    <h1><Link to={'/'} >Page 2</Link></h1>
  </div>
}

export default Page2