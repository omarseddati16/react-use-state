import React from "react";
import { useState } from "react";

const Main = ({ languages }) => {
  const [language, setlanguage] = useState(languages[0]);

  return (
    <main className="mt-4">
      <div className="container">
        <div className="row">
          <ul className="d-flex gap-2 col-12">
            {languages.map((newLanguages) => (
              <li className="list-unstyled p-1" key={newLanguages.id}>
                <button className="btn btn-primary mt-2 "
                  onClick={() => { setlanguage(newLanguages) }}
                >
                  {newLanguages.title}</button>
              </li>
            ))}
          </ul>
          <div className=" card shadow-sm col-6 mt-4">
            <div className="card-body">
              <h5 className="card-title">{language.title}</h5>
              <p className="card-text">{language.description}</p>
            </div>
          </div>
        </div>
      </div>
    </main >
  );
};

export default Main