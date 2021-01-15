import React from "react"
import styled from "styled-components"
import data from "../../theme/data"
import { pxToRem, media, layout } from "../../theme/helpers"
import ListNumberUnderlineItem from "./ListNumberUnderLineItem"

const ListNumberUnderLine = ({ className }) => {
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

export default styled(ListNumberUnderLine)`
  ${layout()}

  ${media.small`
width:90%;
display:flex;
flex-direction: row;
flex-wrap:wrap;
justify-content:center;
column-gap:${pxToRem(20)};
row-gap:${pxToRem(20)};
margin:${pxToRem(40)};
div{
margin:0 auto;
max-width:${pxToRem(550)};
}
`}

  ${media.medium`
justify-content:center;
div{
max-width:${pxToRem(350)};
margin:0 auto;
}
`}


  ${media.large`
justify-content:space-between;
`}


${media.xlarge`
div{
  margin:0;
}
`}
`
