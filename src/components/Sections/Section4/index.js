import React from "react"

import Container from "../../Container/"
import CTA from "../../CTA"
import ListNumber from "../../ListNumber"
import MyH2 from "../../MyH2"

const Section4 = () => {
  return (
    <Container>
      <MyH2>Comment fonctionne une pompe à chaleur ?</MyH2>
      <p>
        Les pompes à chaleur réversibles répondent au double objectif de
        chauffer votre habitat en hiver et d’obtenir une fraicheur agréable en
        été.
      </p>
      <p>
        Pour fonctionner, la PAC utilise uniquement l’air ambiant et
        l’électricité afin de s’alimenter. Elle se décompose en deux modules :
        un à l’intérieur du logement et un autre à l’extérieur qui va capter
        l’air.
      </p>
      <ListNumber />
      <CTA fontSize={25}>Vérifier mon éligibilité</CTA>
    </Container>
  )
}

export default Section4
