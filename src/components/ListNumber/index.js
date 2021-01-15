import React from "react"
import styled from "styled-components"
import data from "../../theme/data"
import { pxToRem, media, layout } from "../../theme/helpers"
import ListNumberItem from "./ListNumberItem"

const ListNumber = ({ className }) => {
  return (
    <div className={className}>
      {data.ListNumber.map(list => (
        <ListNumberItem
          key={list.id}
          id={list.id}
          title={list.title}
          text={list.text}
          className="listContainer"
        />
      ))}
    </div>
  )
}

export default styled(ListNumber)`
  ${layout()}

  ${media.small`
width:100%;
display:flex;
flex-direction: row;
flex-wrap:wrap;
justify-content:center;
column-gap:${pxToRem(20)};
row-gap:${pxToRem(40)};
margin:${pxToRem(40)};
div{
margin:0 auto;
max-width:${pxToRem(500)};
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
