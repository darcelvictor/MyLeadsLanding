import React from "react"

import { Container } from "../../Container/ContainerElements"
import CTA from "../../CTA"
import MyH2 from "../../MyH2"
import MaPrimRenov2 from "../../../images/svg/maPrimeRenov2.inline.svg"

const Section6 = () => {
  return (
    <Container
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(255, 255, 255, 0.17), rgba(101, 194, 229, 0.23) 19%, rgba(101, 194, 229, 0.47) 85%, rgba(255, 255, 255, 0.51))",
      }}
    >
      <MyH2>Qu’est-ce que MaPrimeRenov’ ? </MyH2>
      <MaPrimRenov2 />
      <h3>
        MaPrimeRénov’ est la principale aide de l’Etat pour la rénovation
        énergétique.{" "}
      </h3>
      <p>
        Cette aide existe depuis le 1er janvier 2020, mais à compter du 1er
        janvier 2021, tous les propriétaires occupants modestes ou aisés,
        propriétaires bailleurs et copropriétés peuvent en bénéficier.
      </p>
      <p>
        L’ensemble des travaux qui feront l’objet d’un devis signé après le 1er
        octobre 2020 sont éligibles à MaPrimeRénov’.
      </p>
      <p>
        Les propriétaires occupants et les copropriétaires pourront déposer leur
        demande d’aide dès le 1er janvier 2021, les propriétaires bailleurs
        pourront le faire dès le 1er juillet 2021.
      </p>
      <p>
        Cette aide a pour but d’améliorer la qualité de service en accélérant et
        en simplifiant les démarches. Désormais, un simple dossier en ligne vous
        permettra de bénéficier d’une aide versée rapidement après la fin des
        travaux sans attendre une réduction fiscale l’année suivante comme
        auparavant.
      </p>
      <p>
        MaPrimeRénov’ permet aussi de cibler davantage les travaux permettant le
        plus d’économies d’énergie. Elle peut financer une grande variété de
        travaux d’isolation, de ventilation, de changement de mode de chauffage,
        ou de rénovation globale. Les travaux les plus performants sont mieux
        financés et le montant de la prime est progressif afin de soutenir plus
        fortement les ménages qui en ont le plus besoin.
      </p>
      <a className="link" href="https://www.maprimerenov.gouv.fr">
        source : www.maprimerenov.gouv.fr
      </a>
      <CTA fontSize={30}>Je souhaite tester mon éligibilité &#8594;</CTA>
    </Container>
  )
}

export default Section6
