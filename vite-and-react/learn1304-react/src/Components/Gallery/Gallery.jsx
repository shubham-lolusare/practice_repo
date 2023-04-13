import { sculptureList } from "../../assets/data";
import { useState } from "react";

export default function Gallery() {
  //   let index = 0;
  const [index, setIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  //   console.log(useState(0));

  function handleClick() {
    setIndex(index + 1);
  }

  function handleShow() {
    setShowDetails(!showDetails);
  }

  let sculpture = sculptureList[index];

  return (
    <>
      <button onClick={handleClick}>Next</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <div>
        <button onClick={handleShow}>{showDetails ? "Hide" : "Show"}</button>
      </div>

      {showDetails && <p>{sculpture.description}</p>}
    </>
  );
}
