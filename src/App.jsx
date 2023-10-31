import React from "react";
import MyButton from "./MyButton";

const Greetings = () => {
  console.log("Hello");
};
const Hi = () => {
  console.log("Hi");
};

const data = [
  {
    id: "0",
    name: "Hello",
    eventType: "onMouseOver", // onClick
    eventHandler: Greetings,
  },
  {
    id: "1",
    name: "Hi",
    eventType: "onClick", // onClick
    eventHandler: Hi,
  },
];

const styling = [
  {
    id: "0",
    color: "red",
    fontSize: "20px",
  },
  {
    id: "1",
    color: "blue",
    fontSize: "30px",
  },
];
function App() {
  return (
    <>
      {data.map((i) => (
        <>
          <button
            key={i.id}
            name={i.name}
            // onMouseOver={() => console.log("hi")}
            {...{ [i.eventType]: i.eventHandler }}
            style={styling[i.id]}
          >
            {i.name}
          </button>
          <MyButton props={i} style={styling[i.id]} />
        </>
      ))}
    </>
  );
}

export default App;
