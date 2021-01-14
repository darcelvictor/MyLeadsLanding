import React from "react"
import { FirstP, MyImage, MyText, Container } from "./FirstSectionElements"
import MaPrimRenov from "../../../images/svg/maPrimRenov.inline.svg"
import data from "../../../theme/data"

const Item = ({ txt, image }) => {
  return (
    <div>
      <MyImage src={image} />
      <MyText>{txt}</MyText>
    </div>
  )
}

const FirstSection = () => {
  return (
    <>
      <MaPrimRenov style={{ margin: "30 auto" }} />
      <FirstP>
        Depuis le 11 Janvier 2021 tous les propriétaires occupants (même les
        plus aisés) sont éligibles au dispositif MaPrimeRénov
      </FirstP>
      <FirstP>
        Cette aide vous permet de couvrir jusqu’à 90% du montant de vos travaux.
      </FirstP>
      <Container>
        {data.firstSection.map(feature => (
          <Item key={feature.id} txt={feature.text} image={feature.image} />
        ))}
      </Container>
    </>
  )
}

export default FirstSection
