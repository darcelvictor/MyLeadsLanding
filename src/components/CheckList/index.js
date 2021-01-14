import React from "react"
import { MyUnorganizedList } from "./CheckListElements"
///import data from "../../theme/data"

const CheckList = ({ data, color, TitleColor }) => {
  return (
    <MyUnorganizedList color={color}>
      {data.map(item => (
        <li key={item.id}>
          {item.text ? (
            <>
              <h3 style={{ color: TitleColor }}>{item.title}</h3>
              <p style={{ color: color }}>{item.text}</p>
            </>
          ) : (
            <h3 style={{ color: color }}>{item.title}</h3>
          )}
        </li>
      ))}
    </MyUnorganizedList>
  )
}

export default CheckList
