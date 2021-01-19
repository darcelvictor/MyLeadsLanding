import React from "react"
import styled from "styled-components"

import Banner from "../../Banner"
import Container from "../../Container"
import CheckList from "../../CheckList"
import Separator from "../../Separator"
import MyForm from "../../Form"
import { FirstP } from "./Section1Elements"
import MaPrimRenov from "../../../images/svg/maPrimRenov.inline.svg"

import { pxToRem, media, layout } from "../../../theme/helpers"

import data from "../../../theme/data"

import StyledBackgroundSection from "../../ImageBG"

const Section1 = ({ className }) => {
  return (
    <StyledBackgroundSection>
      <Container className={className}>
        <div className="firstDiv">
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
        </div>
        <MyForm />
        <div className="secondDiv">
          <MaPrimRenov className="maPrim" />
          <FirstP>
            Depuis le 11 Janvier 2021 tous les propriétaires occupants (même les
            plus aisés) sont éligibles au dispositif MaPrimeRénov
          </FirstP>
          <FirstP>
            Cette aide vous permet de couvrir jusqu’à 90% du montant de vos
            travaux.
          </FirstP>
        </div>
      </Container>
    </StyledBackgroundSection>
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
  padding-top: 0;

  .secondDiv {
    display: flex;
    flex-direction: column;
  }
  .maPrim {
    margin: ${pxToRem(30)} 0;
    justify-self: center;
    align-self: center;
  }
  ${media.large`
  ${layout()}
  padding-top: ${pxToRem(60)};
  background-image: none;
  display:grid;
  grid-template-columns: 47% 3% 50%;
  grid-template-rows: 48% 4% 48%;
  
  #form{
    grid-column-start: 3;
    grid-row-start: 1;
    grid-row-end: 4;
    justify-self: flex-end;
  }
  .firstDiv{
    grid-column-start: 1;
    grid-row-start: 1;
    align-self: flex-start;
    *{
      text-align:left;

    }
  }
  .secondDiv{
    grid-column-start: 1;
    grid-row-start: 3;
    align-self:flex-start;
    *{
      text-align:left;

    }
    .maPrim {
    margin: 0 0 ${pxToRem(30)} 0;
    align-self:flex-start;
  }
  }
  `}
`
