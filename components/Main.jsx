import React from "react";
import { useState } from "react";
import LanguageCard from './Card'
import ButtonCard from "./Button";


const Main = ({ languages }) => {
  const [language, setLanguage] = useState(languages[0]);
  return (
    <main className="mt-4">
      <div className="container">
        <div className="row">
          <ul className="d-flex gap-2 col-12">
            {languages.map((newLanguages) => (
              <ButtonCard
                key={newLanguages.id}
                language={newLanguages}
                isActive={language === newLanguages}
                onClick={setLanguage}
              />
            ))}
          </ul>
          <LanguageCard language={language} />
        </div>
      </div>
    </main >
  );
};

export default Main