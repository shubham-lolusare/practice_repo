// import "./Button.css";

// export default function Button({ onClick, children }) {
//   function handleClick(e) {
//     e.stopPropagation();
//     console.log(e.target);
//     onClick();
//   }
//   return <button onClick={handleClick}>{children}</button>;
// }

let guest = 0;

function Cup() {
  // Bad: changing a preexisting variable!
  console.log(guest);
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <Cup />
      <Cup />
      <Cup />
    </>
  );
}
