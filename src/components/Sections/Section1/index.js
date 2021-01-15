import React from "react"
import styled from "styled-components"

import Banner from "../../Banner"
import { Container } from "../../Container/ContainerElements"
import CheckList from "../../CheckList"
import Separator from "../../Separator"
import MyForm from "../../Form"
import { FirstP } from "./Section1Elements"
import MaPrimRenov from "../../../images/svg/maPrimRenov.inline.svg"

import { colors, pxToRem, media } from "../../../theme/helpers"

import data from "../../../theme/data"

import BackgroundSection from "../../ImageBG"

const Section1 = ({ className }) => {
  return (
    <BackgroundSection>
      <Container className={className}>
        <Banner>
          Vous êtes propriétaire d’une maison chauffée au gaz, au fioul ou au
          charbon ?
        </Banner>
        <Separator />
        <h1>
          Bénéficiez de 20000€ d’aides pour l’installation de votre pompe à
          chaleur
        </h1>
        <CheckList data={data.firstCheckList} color="white" />
        <MyForm />
        <MaPrimRenov style={{ margin: "30 auto" }} />
        <FirstP>
          Depuis le 11 Janvier 2021 tous les propriétaires occupants (même les
          plus aisés) sont éligibles au dispositif MaPrimeRénov
        </FirstP>
        <FirstP>
          Cette aide vous permet de couvrir jusqu’à 90% du montant de vos
          travaux.
        </FirstP>
      </Container>
    </BackgroundSection>
  )
}

export default styled(Section1)`
  background-image: linear-gradient(
    to bottom,
    #4a74ff,
    rgba(69, 151, 186, 0.75) 51%,
    rgba(24, 145, 184, 0.51) 88%,
    rgba(255, 255, 255, 0.51)
  );
  ${media.small`
  background-image: none;
  `}
`
