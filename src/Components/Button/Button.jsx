import React from "react";

function Button({title, disable, onClick }) {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
      disabled={disable}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default Button;
