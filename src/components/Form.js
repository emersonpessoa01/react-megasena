import React from "react";

export default function Form({ data, onLimitChange, onButtonClick }) {
  const { limit, isCalculating } = data;
  // const handleInputChange = (event) => {
  //   const number = Number(event.target.value);
  //   onLimitChange(number);
  // };

  const { container, inputStyle, inputRight } = styles;

  return (
    <div className="center" style={container}>
      <div className="input-field">
        <input
          style={inputStyle}
          autoFocus
          min="1"
          max="100"
          step="1"
          id="inputLimit"
          type="number"
          value={limit}
          // onChange={handleInputChange}
          onChange={onLimitChange}
          disabled={isCalculating}
        />
        <label style={inputStyle} className="active" htmlFor="inputLimit">
          Quantidades de sorteios
        </label>
      </div>

      <button
        style={inputRight}
        className="waves-effect waves-light btn"
        onClick={onButtonClick}
        disabled={isCalculating}
      >
        Calcular
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  inputStyle: {
    width: "300px",
    marginLeft: "30px",
  },
  inputRight: {
    marginLeft: "30px",
  },
};
