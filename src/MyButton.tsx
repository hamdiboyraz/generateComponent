import React from "react";

function MyButton({ props, style }) {
  const { id, name, eventType, eventHandler } = props;
  console.log(props);

  return (
    <>
      <button
        id={id}
        name={name}
        type="button"
        {...{ [eventType]: eventHandler }}
        style={style}
      >
        {name}
      </button>
    </>
  );
}

export default MyButton;
