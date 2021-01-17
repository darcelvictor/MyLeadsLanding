import React from "react"

import Container from "../../Container"

import ListNumberUnderLine from "../../ListNumberUnderLine"
import MyH2 from "../../MyH2"
import { colors } from "../../../theme/helpers"

const Section5 = () => {
  return (
    <div style={{ backgroundColor: colors.BKgrey }}>
      <Container>
        <MyH2>votre pompe à chaleur en 3 étapes</MyH2>
        <ListNumberUnderLine className="listContainer" />
      </Container>
    </div>
  )
}

export default Section5
