import React from "react"
import Item from "./item"
import Container from "../../Container"
import CTA from "../../CTA"
import data from "../../../theme/data"
import Depanneur from "../../../images/svg/depanneur.inline.svg"
import { pxToRem } from "../../../theme/helpers"

const Section2 = () => {
  return (
    <Container>
      <div className="listItems">
        {data.firstSection.map(feature => (
          <Item key={feature.id} txt={feature.text} image={feature.image} />
        ))}
      </div>
      <CTA fontSize={23}>je test mon éligibilité</CTA>
      <Depanneur
        id="DepanneurMobile"
        style={{ margin: pxToRem(15), maxWidth: "90%" }}
      />
    </Container>
  )
}

export default Section2
