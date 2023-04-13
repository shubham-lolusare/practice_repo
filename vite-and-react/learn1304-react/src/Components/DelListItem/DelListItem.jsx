import { useState } from "react";

export default function DelListItem() {
  let [art, setArt] = useState([
    { id: 0, name: "Marta Colvin Andrade" },
    { id: 1, name: "Lamidi Olonade Fakeye" },
    { id: 2, name: "Louise Nevelson" },
  ]);

  function handleClick(e) {
    let key = Number.parseInt(e.target.name);
    setArt(art.filter((a) => a.id !== key));
  }

  return (
    <ul>
      {art.map((obj) => {
        return (
          <li key={obj.id}>
            {obj.name}{" "}
            <button onClick={handleClick} name={obj.id}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
