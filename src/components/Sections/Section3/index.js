import React from "react"

import CTA from "../../CTA"
import MyH2 from "../../MyH2"
import Container from "../../Container/"
import CheckList from "../../CheckList"

import { pxToRem, colors } from "../../../theme/helpers"

import data from "../../../theme/data"

// IMAGES

import Depanneur from "../../../images/svg/depanneur.inline.svg"

const Section3 = () => {
  return (
    <>
      <Container>
        <CTA fontSize={23}>je test mon éligibilité</CTA>
        <Depanneur style={{ margin: pxToRem(15), maxWidth: "90%" }} />
      </Container>
      <div style={{ backgroundColor: colors.BKgrey }}>
        <Container>
          <MyH2>Comment fonctionne une pompe à chaleur ?</MyH2>
          <CheckList
            data={data.secondCheckList}
            color={colors.blue}
            TitleColor={colors.grey}
          />
          <CTA fontSize={27}>TEST D’éligibilité &#8593;</CTA>
        </Container>
      </div>
    </>
  )
}

export default Section3
