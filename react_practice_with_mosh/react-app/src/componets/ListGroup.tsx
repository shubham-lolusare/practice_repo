import { Fragment, useState } from "react";

function ListGroup() {
  const arr = ["shubham", "rakesh", "ranjana", "rakhi", "rushabh"];

  let [stateIndex, setStateIndex] = useState(-1);

  return (
    <>
      <h1>List Group</h1>
      <ul className="list-group">
        {arr.map((item, index) => (
          <li
            key={item}
            className={
              stateIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => setStateIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
