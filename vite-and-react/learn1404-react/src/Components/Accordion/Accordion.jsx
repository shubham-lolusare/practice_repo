import { useState } from "react";
import AccordPanel from "../AccordPanel/AccordPanel";

import "./Accordion.css";
// export default function Accordion() {
//   let [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <>
//       <AccordPanel
//         title="About"
//         isActive={activeIndex === 0}
//         onShow={() => {
//           setActiveIndex(0);
//         }}
//       >
//         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis quia
//         totam doloribus blanditiis reprehenderit quis enim qui aut dicta, ad et
//         laudantium tenetur? Praesentium, dolorem quos impedit modi voluptate
//         ipsum perferendis est, velit ipsa mollitia ea eaque, unde amet nihil
//         doloribus voluptas! Unde delectus sed dolorem repellendus voluptatibus
//         neque labore.
//       </AccordPanel>
//       <AccordPanel
//         title="Legacy"
//         isActive={activeIndex === 1}
//         onShow={() => {
//           setActiveIndex(1);
//         }}
//       >
//         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis quia
//         totam doloribus blanditiis reprehenderit quis enim qui aut dicta, ad et
//         laudantium tenetur? Praesentium, dolorem quos impedit modi voluptate
//         ipsum perferendis est, velit ipsa mollitia ea eaque, unde amet nihil
//         doloribus voluptas! Unde delectus sed dolorem repellendus voluptatibus
//         neque labore.
//       </AccordPanel>
//       <AccordPanel
//         title="Careers"
//         isActive={activeIndex === 2}
//         onShow={() => {
//           setActiveIndex(2);
//         }}
//       >
//         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis quia
//         totam doloribus blanditiis reprehenderit quis enim qui aut dicta, ad et
//         laudantium tenetur? Praesentium, dolorem quos impedit modi voluptate
//         ipsum perferendis est, velit ipsa mollitia ea eaque, unde amet nihil
//         doloribus voluptas! Unde delectus sed dolorem repellendus voluptatibus
//         neque labore.
//       </AccordPanel>
//     </>
//   );
// }

export default function Accordion() {
  let [activeIndex, setActiveIndex] = useState();

  function handleShow(e) {
    setActiveIndex(e.target.parentElement.name);
  }

  return (
    <div className="accord">
      <AccordPanel
        id="0"
        title="About"
        isActive={activeIndex == 0}
        onShow={handleShow}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore odio
        quis numquam veniam, qui enim dolores quaerat dolore, unde libero
        consequatur earum, dolor sint vitae magnam. Inventore voluptate rerum
        dicta reprehenderit error necessitatibus, quidem asperiores neque
        veritatis, ipsum itaque, iusto eveniet recusandae a? Repellendus illo
        quae aperiam aut deleniti dolorem?
      </AccordPanel>
      <AccordPanel
        id="1"
        title="About"
        isActive={activeIndex == 1}
        onShow={handleShow}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore odio
        quis numquam veniam, qui enim dolores quaerat dolore, unde libero
        consequatur earum, dolor sint vitae magnam. Inventore voluptate rerum
        dicta reprehenderit error necessitatibus, quidem asperiores neque
        veritatis, ipsum itaque, iusto eveniet recusandae a? Repellendus illo
        quae aperiam aut deleniti dolorem?
      </AccordPanel>
      <AccordPanel
        id="2"
        title="About"
        isActive={activeIndex == 2}
        onShow={handleShow}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore odio
        quis numquam veniam, qui enim dolores quaerat dolore, unde libero
        consequatur earum, dolor sint vitae magnam. Inventore voluptate rerum
        dicta reprehenderit error necessitatibus, quidem asperiores neque
        veritatis, ipsum itaque, iusto eveniet recusandae a? Repellendus illo
        quae aperiam aut deleniti dolorem?
      </AccordPanel>
    </div>
  );
}
