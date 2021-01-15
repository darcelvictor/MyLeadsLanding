import styled from "styled-components"
import React from "react"

const MyH2 = ({ className, children }) => {
  return (
    <>
      <h2>{children}</h2>
      <div className={className}></div>
    </>
  )
}

export default styled(MyH2)`
  display: none;
`
