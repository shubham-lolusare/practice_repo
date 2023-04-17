// const person = {
//   name: "Gregorio Y. Zara",
//   theme: {
//     backgroundColor: "black",
//     color: "pink",
//   },
// };

// export default function Profile() {
//   document.body.style.backgroundColor = `${person.theme.backgroundColor}`;
//   document.body.style.color = `${person.theme.color}`;

//   return (
//     <div className="p-4">
//       <h1 className="mb-4 text-4xl">{person.name}</h1>
//       <img
//         src="https://i.imgur.com/7vQD0fPs.jpg"
//         alt="zara"
//         className="rounded-full"
//       />
//       <ul
//         role="list"
//         className="list-inside list-image-[url(https://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/16/Actions-dialog-ok-apply-icon.png)] mt-4"
//       >
//         <li>Improve the videophone</li>
//         <li>Prepare aeronautics lectures</li>
//         <li>Work on the alcohol-fuelled engine</li>
//       </ul>
//     </div>
//   );
// }

export default function Profile({ name, src }) {
  return (
    <div className="w-1/2 flex gap-4 border-2 border-blue-200 rounded-xl m-4 p-4 bg-sky-100">
      <div className="w-1/3">
        <img src={src} alt="Shubham" className="rounded-full" />
      </div>
      <div className="flex flex-col gap-4">
        <div className="text-3xl font-semibold">{name}</div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, animi
          distinctio nemo accusamus, maiores blanditiis quasi delectus illum
          provident molestiae, ab suscipit. Atque, incidunt. Similique deserunt
          assumenda et ex accusamus!
        </div>
      </div>
    </div>
  );
}
