import React, { useContext } from 'react'
import { firstName,lastName } from './App'
const Comp3 = () => {

const fname = useContext(firstName)
const lname = useContext(lastName)

  return (
    <div>

    <h1>Hey This is {fname} {lname}  </h1>

    </div>
  )
}

export default Comp3