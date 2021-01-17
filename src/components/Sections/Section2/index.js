import React from "react"
import Item from "./item"
import Container from "../../Container"
import data from "../../../theme/data"

const Section2 = () => {
  return (
    <Container>
      <div className="listItems">
        {data.firstSection.map(feature => (
          <Item key={feature.id} txt={feature.text} image={feature.image} />
        ))}
      </div>
    </Container>
  )
}

export default Section2
