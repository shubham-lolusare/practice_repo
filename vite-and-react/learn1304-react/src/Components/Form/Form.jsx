// import { useState } from "react";
import "./Form.css";
import { useImmer } from "use-immer";

// export default function Form() {
//   let [isSent, setIsSent] = useState(false);
//   if (isSent) {
//     return <h1>Your message is on the waysddfe</h1>;
//   }

//   function handleClick(e) {
//     e.preventDefault();
//     setIsSent(true);
//   }
//   return (
//     <form onClick={handleClick}>
//       <textarea name="text" id="text" cols="30" rows="10">
//         Hi
//       </textarea>
//       <div>
//         <input type="submit" value="Sbt" />
//       </div>
//     </form>
//   );
// }

// export default function Form() {
//   let [person, setPerson] = useState({
//     firstname: "",
//     lastname: "",
//     email: "",
//     artwork: {
//       src: "https://i.imgur.com/Sd1AgUOm.jpg",
//     },
//   });

//   function handleChange(e) {
//     setPerson({
//       ...person,
//       [e.target.name]: e.target.value,
//       artwork: {
//         ...person,
//         [e.target.name]: e.target.value,
//       },
//     });
//   }

//   return (
//     <form>
//       <input
//         type="text"
//         name="firstname"
//         placeholder="First Name"
//         onChange={handleChange}
//       />
//       <br />
//       <input
//         type="text"
//         name="lastname"
//         placeholder="Last Name"
//         onChange={handleChange}
//       />
//       <br />
//       <input
//         type="email"
//         name="email"
//         placeholder="Email id"
//         onChange={handleChange}
//       />
//       <br />
//       <input
//         type="text"
//         name="src"
//         placeholder="Image src"
//         onChange={handleChange}
//       />
//       <br />
//       <p>
//         {person.firstname} {person.lastname} {person.email}
//       </p>
//       <div>
//         <img src={person.artwork.src} alt="artwork" />
//       </div>
//     </form>
//   );
// }

export default function Form() {
  let [person, setPerson] = useImmer({
    firstname: "",
    lastname: "",
    email: "",
    artwork: {
      src: "https://i.imgur.com/Sd1AgUOm.jpg",
    },
  });

  function handleChange(e) {
    setPerson((draft) => {
      draft[e.target.name] = e.target.value;
    });
  }

  function handleChanges(e) {
    setPerson((draft) => {
      draft.artwork.src = e.target.value;
    });
  }

  return (
    <form>
      <input
        type="text"
        name="firstname"
        placeholder="First Name"
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        name="lastname"
        placeholder="Last Name"
        onChange={handleChange}
      />
      <br />
      <input
        type="email"
        name="email"
        placeholder="Email id"
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        name="src"
        placeholder="Image src"
        onChange={handleChanges}
      />
      <br />
      <p>
        {person.firstname} {person.lastname} {person.email}
      </p>
      <div>
        <img src={person.artwork.src} alt="artwork" />
      </div>
    </form>
  );
}
