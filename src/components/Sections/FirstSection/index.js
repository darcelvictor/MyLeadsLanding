import React from "react"
import { MyImage, MyText, Container } from "./FirstSectionElements"
import Wallet from "../../../images/svg/wallet.svg"
//import data from "../../../theme/data"

const Item = ({ txt, image = Wallet }) => {
  return (
    <div>
      <MyImage src={image} />
      <MyText>{txt}</MyText>
    </div>
  )
}

const FirstSection = () => {
  return (
    <Container>
      <Item txt="test" />
    </Container>
  )
}

export default FirstSection
