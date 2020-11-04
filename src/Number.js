import React from "react";

export default function Number({ number, picked }) {
  const { description, count } = number;
  const { containerStyle, numberStyle, badgeContainer, badgeStyle } = styles;

  const pickedStyle = picked ? {backgroundColor: "#81ecec"}: {}

  return (
    <div style={{...containerStyle, ...pickedStyle}}>
      <span style={numberStyle}>{description}</span>
      <span style={badgeContainer}>
        <span style={badgeStyle}>{count}</span>
      </span>
    </div>
  );
}

const styles = {
  containerStyle: {
    border: "1px solid lightgray",
    borderRadius: "4px",
    padding: "4px",
    margin: "5px",

    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: "80px",
  },

  numberStyle: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginRight: "10px",
  },

  badgeContainer: {
    minWidth: "30px",
    minHeight: "30px",
    border: "1px solid transparent",
    borderRadius: "50%",
    backgroundColor: "#DD0031",

    padding: "4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  badgeStyle: {
    fontWeight: "bold",
    color: "white",
    fontSize: "15px"
  },
};
