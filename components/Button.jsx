import React from "react";

const ButtonCard = ({ language, onClick, isActive }) => {
  return (
    <li className="list-unstyled p-1">
      <button
        className={`btn mt-2 ${isActive ? "btn-warning" : "btn-primary"
          }`}
        onClick={() => onClick(language)}
      >
        {language.title}
      </button>
    </li>
  );
};

export default ButtonCard;