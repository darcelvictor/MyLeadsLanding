import React from "react"
import data from "../../theme/data"
import ListNumberUnderlineItem from "./ListNumberUnderLineItem"

const ListNumberUnderLine = () => {
  return (
    <div className="listItems">
      {data.ListNumberUnderLine.map(list => (
        <ListNumberUnderlineItem
          key={list.id}
          nb={list.nb}
          title={list.title}
          text={list.text}
        />
      ))}
    </div>
  )
}

export default ListNumberUnderLine
