import React from "react";

const LanguageCard = ({ language }) => {
  return (
    <div className=" card shadow-sm col-6 mt-4">
      <div className="card-body">
        <h5 className="card-title">{language.title}</h5>
        <p className="card-text">{language.description}</p>
      </div>
    </div>
  )
}

export default LanguageCard;