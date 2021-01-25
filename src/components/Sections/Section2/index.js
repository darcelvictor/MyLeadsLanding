import React from "react"
import Item from "./item"
import Container from "../../Container"
import CTA from "../../CTA"
import data from "../../../theme/data"
import Depanneur from "../../../images/svg/depanneur.inline.svg"
import { media } from "../../../theme/helpers"
import GreenLine from "../../GreenLine"
import styled from "styled-components"

const Section2 = ({ className }) => {
  return (
    <Container className={className}>
      <GreenLine />
      <div className="listItems">
        {data.firstSection.map(feature => (
          <Item key={feature.id} txt={feature.text} image={feature.image} />
        ))}
      </div>
      <CTA fontSize={23}>je test mon éligibilité</CTA>
      <Depanneur id="DepanneurMobile" />
    </Container>
  )
}

export default styled(Section2)`
  .GreenLine {
    display: none;
  }
  ${media.large`
.GreenLine {
  display:block;
}`}
`
