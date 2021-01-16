import React from "react"
import Item from "./item"
import Container from "../../Container"
import data from "../../../theme/data"
import styled from "styled-components"
import { pxToRem, media, layout } from "../../../theme/helpers"
import GreenLine from "../../GreenLine"

const Section2 = ({ className }) => {
  return (
    <Container>
      <GreenLine />
      <div className={className}>
        {data.firstSection.map(feature => (
          <Item key={feature.id} txt={feature.text} image={feature.image} />
        ))}
      </div>
    </Container>
  )
}

export default styled(Section2)`
  ${layout}
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
