import React from "react"
import { MyImage, MyText, Container } from "./Section2Elements"
import data from "../../../theme/data"

const Item = ({ txt, image }) => {
  return (
    <div>
      <MyImage src={image} />
      <MyText>{txt}</MyText>
    </div>
  )
}

const Section2 = () => {
  return (
    <>
      <Container>
        {data.firstSection.map(feature => (
          <Item key={feature.id} txt={feature.text} image={feature.image} />
        ))}
      </Container>
    </>
  )
}

export default Section2
