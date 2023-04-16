import { useEffect, useRef } from "react";
// export default function Button() {
//   let ref = useRef(0);

//   return (
//     <>
//       <button
//         onClick={() => {
//           ref.current = ref.current + 1;
//         }}
//       >
//         Click Me!
//       </button>
//       <p>{ref.current}</p>
//     </>
//   );
// }

export default function Button() {
  let ref = useRef(null);

  //   ref.current.value = "Shubham clicked button";

  useEffect(() => {
    ref.current.value = "Shubham clicked button";
  });

  return (
    <>
      {/* <button
        onClick={() => {
          ref.current.value = "Shubham clicked button";
        }}
      >
        Click Me!
      </button> */}
      <input type="text" name="text" id="text" ref={ref} />
    </>
  );
}
