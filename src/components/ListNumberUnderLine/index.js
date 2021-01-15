import React from "react"
import styled from "styled-components"
import data from "../../theme/data"
//import { pxToRem } from "../../theme/helpers"
import ListNumberUnderlineItem from "./ListNumberUnderLineItem"

const ListNumberUnderLine = className => {
  return (
    <div className={className}>
      {data.ListNumberUnderLine.map(list => (
        <ListNumberUnderlineItem
          key={list.id}
          nb={list.nb}
          title={list.title}
          text={list.text}
        />
      ))}
    </div>
  )
}

export default styled(ListNumberUnderLine)``
