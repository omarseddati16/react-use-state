import React from "react";

const Main = ({ languages }) => {
  const [language, setlanguage] = useState(0)
  return (
    <main className="mt-4">
      <div className="container">
        <div className="row">
          <ul className="d-flex gap-2 col-12">
            {languages.map((lang) => (
              <li className="list-unstyled p-1" key={lang.id}>
                <button className="btn btn-primary mt-2 "
                  onClick={() => setlanguage(lang)}
                >
                  {lang.title}
                </button>
              </li>
            ))}
          </ul>
          <div className=" card shadow-sm col-6 mt-4">
            <div className="card-body">
              <h5 className="card-title">HTML</h5>
              <p className="card-text">HTML (HyperText Markup Language) è il linguaggio standard per creare pagine e applicazioni web. Struttura il contenuto web e fornisce elementi di base come titoli, paragrafi e immagini.</p>
            </div>
          </div>
        </div>
      </div>
    </main >
  );
};

export default Main