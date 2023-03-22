
import React, { createContext } from 'react'
import Comp1 from './Comp1'

const firstName = createContext();
const lastName = createContext();

const App = () => {
  return (
    <>
      <firstName.Provider value={"vishal g katkar"}>
        <lastName.Provider value={"Technical"}>
            <Comp1/>
        </lastName.Provider>
      </firstName.Provider>
    </>
  )
}

export default App
export {firstName,lastName}