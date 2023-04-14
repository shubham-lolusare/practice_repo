// import { useState } from "react";
import "./AccordPanel.css";
// export default function AccordPanel({ title, children, isActive, onShow }) {
//   return (
//     <>
//       <h1>{title}</h1>
//       {isActive == true && <p>{children}</p>}
//       {isActive != true && <button onClick={onShow}>Show</button>}
//     </>
//   );
// }

export default function AccordPanel({ id, title, isActive, onShow, children }) {
  return (
    <div className="panel">
      <div className="head">
        <h1>{title}</h1>
        <button className="button" onClick={onShow} name={id}>
          <img
            src="https://icons.iconarchive.com/icons/icons8/ios7/128/Arrows-Down-4-icon.png"
            width="20"
            height="20"
          />
        </button>
      </div>
      {isActive && <div className="para">{children}</div>}
    </div>
  );
}
