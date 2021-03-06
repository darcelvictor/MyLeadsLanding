import React from "react"

import CTA from "../../CTA"
import MyH2 from "../../MyH2"
import Container from "../../Container/"
import CheckList from "../../CheckList"

import { colors } from "../../../theme/helpers"

import data from "../../../theme/data"

// IMAGES

import Depanneur from "../../../images/svg/depanneur.inline.svg"

const Section3 = () => {
  return (
    <>
      <div style={{ backgroundColor: colors.BKgrey }}>
        <Container>
          <MyH2>Pourquoi passez à la pompe à chaleur en 2021 ?</MyH2>
          <div className="colunmsContainer">
            <div className="column">
              <CheckList
                data={data.secondCheckList}
                color={colors.lightGrey}
                TitleColor={colors.grey}
              />
            </div>
            <div className="column">
              <Depanneur id="DepanneurDesktop" />
              <CTA>TEST D’éligibilité &#8593;</CTA>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Section3
