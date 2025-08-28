import React from "react";

const LanguageCard = ({ language }) => {
  return (
    <div className=" card shadow-sm col-6 mt-4">

      <div className="card-body">
        <h5 className="card-title">{language.title ?? 'nessun linguaggio selezionato'}</h5>
        <p className="card-text">{language.description ?? 'nessun linguaggio selezionato'}</p>
      </div>
      {/* {!language && <div className="card-body">
        <h5 className="card-title">Nessun linguaggio selezionato</h5>
        <p className="card-text">Nessun linguaggio selezionato</p>
      </div>} */}
    </div>
  )
}

export default LanguageCard;