import React from "react"

import { Container } from "../../Container/ContainerElements"

import ListNumberUnderLine from "../../ListNumberUnderLine"
import MyH2 from "../../MyH2"
import { colors } from "../../../theme/helpers"

const Section5 = () => {
  return (
    <Container style={{ backgroundColor: colors.BKgrey }}>
      <MyH2>votre pompe à chaleur en 3 étapes</MyH2>
      <ListNumberUnderLine className="listContainer" />
    </Container>
  )
}

export default Section5
