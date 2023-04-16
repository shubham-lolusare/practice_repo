// import Button from "./Components/Button/Button";
// import VideosTag from "./Components/VideosTag/VideosTag";
// import { useState } from "react";

import { useState } from "react";

// import { useState } from "react";
// import "./App.css";

// export default function App() {
//   return <Button></Button>;
// }

// export default function App() {
//   let [playStatus, setPlayStatus] = useState(false);
//   let [value, setValue] = useState("");
//   return (
//     <>
//       <input
//         type="text"
//         onChange={(e) => {
//           setValue(e.target.value);
//         }}
//         value={value}
//       />
//       <button
//         onClick={() => {
//           setPlayStatus(!playStatus);
//         }}
//       >
//         {playStatus ? "Pause" : "Play"}
//       </button>
//       <VideosTag
//         isPlaying={playStatus}
//         src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
//       />
//     </>
//   );
// }

// export default function App() {
//   return (
//     <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
//       <img
//         className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
//         src="https://tailwindcss.com/img/erin-lindford.jpg"
//         alt="Woman's Face"
//       />
//       <div className="text-center space-y-2 sm:text-left">
//         <div className="space-y-0.5">
//           <p className="text-lg text-black font-semibold">Erin Lindford</p>
//           <p className="text-slate-500 font-medium">Product Engineer</p>
//         </div>
//         <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
//           Message
//         </button>
//       </div>
//     </div>
//   );
// }
// export default function App() {
//   return (
//     <div className="flex flex-row items-center justify-between group/wrapper bg-slate-200 text-rose-900 border-slate-400 rounded-3xl m-9 p-8">
//       <div>Shubham is the best</div>
//       <div className="invisible group-hover/wrapper:visible">
//         <img
//           src="https://icons.iconarchive.com/icons/iconarchive/incognito-animals/128/Lion-Avatar-icon.png"
//           width="64"
//           height="64"
//         />
//       </div>
//     </div>
//   );
// }

export default function App() {
  let [state, setState] = useState(true);
  if (!state) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  return (
    <>
      <form className="relative">
        <input
          id="name"
          type="file"
          className="peer w-1/4 h-10 m-4 my-8 border-slate-700 border-b-2 placeholder:text-green-500 focus:outline-none font-bold"
          placeholder="Your File"
        />
        <label
          htmlFor="name"
          className="absolute top-0 left-4 peer-placeholder-shown:text-transparent transition-all text-green-500 font-bold peer-placeholder-shown:top-4"
        >
          Your File
        </label>
      </form>
      <button
        onClick={() => {
          setState(!state);
        }}
      >
        {state ? "Dark" : "Light"}
      </button>
    </>
  );
}
