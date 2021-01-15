import React from "react"
import styled from "styled-components"
import data from "../../theme/data"
//import { pxToRem } from "../../theme/helpers"
import ListNumberItem from "./ListNumberItem"

const ListNumber = className => {
  return (
    <div className={className}>
      {data.ListNumber.map(list => (
        <ListNumberItem
          key={list.id}
          id={list.id}
          title={list.title}
          text={list.text}
        />
      ))}
    </div>
  )
}

export default styled(ListNumber)``
