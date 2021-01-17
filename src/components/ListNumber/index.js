import React from "react"
import data from "../../theme/data"
import ListNumberItem from "./ListNumberItem"

const ListNumber = () => {
  return (
    <div className="listItems">
      {data.ListNumber.map(list => (
        <ListNumberItem
          key={list.id}
          id={list.id}
          title={list.title}
          text={list.text}
          className="listContainer"
        />
      ))}
    </div>
  )
}

export default ListNumber
