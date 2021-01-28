import React from "react"

import Container from "../../Container"
import CTA from "../../CTA"
import MyH2 from "../../MyH2"
import MaPrimRenov2 from "../../../images/svg/maPrimeRenov2.inline.svg"
import styled from "styled-components"

import { media } from "../../../theme/helpers"

const Section6 = ({ className }) => {
  return (
    <div className={className}>
      <Container>
        <MyH2>Qu’est-ce que MaPrimeRenov’ ? </MyH2>
        <div className="colunmsContainerS6">
          <MaPrimRenov2 />
          <h3>
            MaPrimeRénov’ est la principale aide de l’Etat pour la rénovation
            énergétique.{" "}
          </h3>
        </div>
        <p>
          Cette aide existe depuis le 1er janvier 2020, mais à compter du 1er
          janvier 2021, tous les propriétaires occupants modestes ou aisés,
          propriétaires bailleurs et copropriétés peuvent en bénéficier.
        </p>
        <p>
          L’ensemble des travaux qui feront l’objet d’un devis signé après le
          1er octobre 2020 sont éligibles à MaPrimeRénov’.
        </p>
        <p>
          Les propriétaires occupants et les copropriétaires pourront déposer
          leur demande d’aide dès le 1er janvier 2021, les propriétaires
          bailleurs pourront le faire dès le 1er juillet 2021.
        </p>
        <p>
          Cette aide a pour but d’améliorer la qualité de service en accélérant
          et en simplifiant les démarches. Désormais, un simple dossier en ligne
          vous permettra de bénéficier d’une aide versée rapidement après la fin
          des travaux sans attendre une réduction fiscale l’année suivante comme
          auparavant.
        </p>
        <p>
          MaPrimeRénov’ permet aussi de cibler davantage les travaux permettant
          le plus d’économies d’énergie. Elle peut financer une grande variété
          de travaux d’isolation, de ventilation, de changement de mode de
          chauffage, ou de rénovation globale. Les travaux les plus performants
          sont mieux financés et le montant de la prime est progressif afin de
          soutenir plus fortement les ménages qui en ont le plus besoin.
        </p>
        <p>
          <b>source : www.maprimerenov.gouv.fr</b>
        </p>
        <CTA>Je veux tester mon éligibilité</CTA>
      </Container>
    </div>
  )
}

export default styled(Section6)`
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.17),
    rgba(101, 194, 229, 0.23) 19%,
    rgba(101, 194, 229, 0.47) 85%,
    rgba(255, 255, 255, 0.51)
  );
  .colunmsContainerS6 {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
  ${media.large`
  background-image:none;
  
  .colunmsContainerS6 {
    flex-direction:row-reverse;
    svg{
      width:50%;
    }
    h3{
      min-width:50%;
      justify-self:flex-start;
    }
  }
  `}
`
