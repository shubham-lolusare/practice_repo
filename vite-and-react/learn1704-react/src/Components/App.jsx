// import { useState } from "react";
// import Gallery from "./Gallery";

// export default function App() {
//   return <Gallery />;
// }
// export default function App() {
//   return <Gallery />;
// }

// export default function App() {
//   function handleClick() {
//     alert("You clicked button");
//   }
//   return (
//     <button
//       onClick={handleClick}
//       className="p-2 m-4 text-yellow-300 rounded-full border-2 border-blue-600 bg-gradient-to-r from-indigo-600 to-pink-600"
//     >
//       Click Me!
//     </button>
//   );
// }

// import { useState } from "react";
// import { sculptureList } from "../assets/data";

// export default function Gallery() {
//   let [index, setIndex] = useState(0);

//   function handleClick() {
//     setIndex(index + 1);
//     console.log(index);
//   }

//   let sculpture = sculptureList[index];
//   return (
//     <>
//       <button onClick={handleClick}>Next</button>
//       <h2>
//         <i>{sculpture.name} </i>
//         by {sculpture.artist}
//       </h2>
//       <h3>
//         ({index + 1} of {sculptureList.length})
//       </h3>
//       <img src={sculpture.url} alt={sculpture.alt} />
//       <p>{sculpture.description}</p>
//     </>
//   );
// }
import { useState } from "react";

export default function App() {
  let [arr, setArr] = useState([0, 0, 0]);

  function handleClick(i) {
    setArr(
      arr.map((el, j) => {
        if (j == i) {
          return el + 1;
        } else {
          return el;
        }
      })
    );
  }

  return (
    <ul>
      {arr.map((cur, i) => {
        return (
          <li key={++i}>
            {cur}{" "}
            <button
              onClick={() => {
                handleClick(i - 1);
              }}
            >
              +1
            </button>
          </li>
        );
      })}
    </ul>
  );
}
