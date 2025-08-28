import React from "react"

const ButtonCard = ({ language, onClick }) => {
  return (
    <li className="list-unstyled p-1" >
      <button className="btn btn-primary mt-2 "
        onClick={() => onClick(language)}
      >
        {language.title}
      </button>
    </li>
  )
}

export default ButtonCard