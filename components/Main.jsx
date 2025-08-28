import React from "react";

const Main = ({ languages }) => {
  return (
    <main className="mt-4">
      <div className="container">
        <div className="d-flex flex-wrap gap-2 col-6">
          {languages.map((lang) => (
            <li className="list-unstyled p-1" key={lang.id}>
              <button className="btn btn-primary mt-2 ">{lang.title}</button>
            </li>
          ))}
          <div className="card shadow-sm col-12 mt-4">
            <div className="card-body">
              <h5 class="card-title">HTML</h5>
              <p class="card-text">HTML (HyperText Markup Language) è il linguaggio standard per creare pagine e applicazioni web. Struttura il contenuto web e fornisce elementi di base come titoli, paragrafi e immagini.</p>
            </div>
          </div>
        </div>
      </div>
    </main >
  );
};

export default Main