// import Button from "./Components/Button/Button";
// import Gallery from "./Components/Gallery/Gallery";
// import Form from "./Components/Form/Form";
// import MovingDot from "./Components/MovingDot/MovingDot";
// import ListItem from "./Components/ListItem/ListItem";
// import DelListItem from "./Components/DelListItem/DelListItem";
// import TableRow from "./Components/TableRow/TableRow";
// import { useState } from "react";
import "./App.css";

// export default function App() {
//   function handlePlayClick() {
//     alert("Playing");
//   }

//   function handleUploadClick() {
//     alert("Uploading");
//   }

//   return (
//     <div
//       onClick={() => {
//         alert("You clicked Outer div");
//       }}
//     >
//       <Button onClick={handlePlayClick}>Play Movie</Button>
//       <Button onClick={handleUploadClick}>Upload Image</Button>
//     </div>
//   );
// }

// export default function App() {
//   return <TeaSet />;
// }

// export default function App() {
//   return (
//     <>
//       <Gallery />
//     </>
//   );
// }

// export default function App() {
//   return <Form></Form>;
// }

// export default function App() {
//   return <MovingDot />;
// }

// export default function App() {
//   return <Form></Form>;
// }

// export default function App() {
//   let nextid = 0;
//   let [name, setName] = useState("");
//   let [listItem, setListItem] = useState([]);
//   function handleSubmit(e) {
//     e.preventDefault();
//     setListItem([
//       ...listItem,
//       {
//         id: nextid++,
//         name: name,
//       },
//     ]);
//   }
//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           id="name"
//           placeholder="Your Name"
//           onChange={(e) => setName(e.target.value)}
//         />{" "}
//         <input type="submit" value="Add" />
//       </form>
//       <ul>
//         {listItem.map((obj) => {
//           return <ListItem keys={obj.id} name={obj.name} />;
//         })}
//       </ul>
//     </>
//   );
// }

// export default function App() {
//   return <DelListItem />;
// // }
// let sid = 0;
// export default function App() {
//   let [issueArr, setIssueArr] = useState([]);
//   let [bookname, setBookName] = useState("");
//   let [issueto, setIssueTo] = useState("");
//   // let [issueState, setIssueState] = useState("Issued");

//   function handleBookNameChange(e) {
//     setBookName(e.target.value);
//   }

//   function handleIssueTo(e) {
//     setIssueTo(e.target.value);
//   }

//   function handleSubmit(e) {
//     e.preventDefault();

//     setIssueArr([
//       ...issueArr,
//       {
//         id: ++sid,
//         name: bookname,
//         issuer: issueto,
//       },
//     ]);
//   }

//   // function handleStatusChange() {
//   //   setIssueState("Returned");
//   // }

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <input type="text" name="bookname" onChange={handleBookNameChange} />
//         </div>
//         <div>
//           <input type="text" name="issueto" onChange={handleIssueTo} />
//         </div>
//         <div>
//           <input type="submit" value="Issue Book" />
//         </div>
//       </form>
//       <table className="table">
//         <thead>
//           <tr>
//             <th style={{ width: "10%" }}>Sr No</th>
//             <th style={{ width: "50%" }}>Book Name</th>
//             <th style={{ width: "50%" }}>Issue To</th>
//             <th>Status</th>
//           </tr>
//         </thead>

//         <tbody>
//           {issueArr.map((obj) => {
//             return (
//               <TableRow srn={obj.id} name={obj.name} issuer={obj.issuer} />
//             );
//             // return (
//             //   <tr key={obj.id}>
//             //     <td>{obj.id}</td>
//             //     <td>{obj.name}</td>
//             //     <td>{obj.issuer}</td>
//             //     <td>
//             //       {issueState}{" "}
//             //       <button
//             //         style={{ fontSize: "0.6rem" }}
//             //         onClick={handleStatusChange}
//             //       >
//             //         Change Status
//             //       </button>
//             //     </td>
//             //   </tr>
//             // );
//           })}
//         </tbody>
//       </table>
//     </>
//   );
// }
