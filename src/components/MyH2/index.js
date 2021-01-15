import styled from "styled-components"
import React from "react"
import GreenLine from "../GreenLine"

const MyH2 = ({ className, children }) => {
  return (
    <>
      <h2 className={className}>{children}</h2>
      <GreenLine />
    </>
  )
}

export default styled(MyH2)``
