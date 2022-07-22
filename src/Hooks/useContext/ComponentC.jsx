import React, { useContext } from 'react'
import { userContext } from './Main'

function ComponentC() {
  const data = useContext(userContext)
  return (
    <>
      <h1>username: {data} </h1>
    </>
  )
}

export default ComponentC