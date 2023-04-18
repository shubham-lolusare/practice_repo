import Panel from "./Panel";
import { useState } from "react";

export default function Accordion() {
  let [active, setActive] = useState([false, false, false]);

  function handleActive(index) {
    setActive(
      active.map((ind, i) => {
        if (i === Number.parseInt(index)) {
          return !ind;
        } else {
          return false;
        }
      })
    );
  }

  return (
    <div className="border-2 border-sky-400 divide-y-2 divide-sky-400 bg-sky-100 flex flex-col rounded-xl m-4">
      <Panel
        key="1"
        ind="0"
        isActive={active[0]}
        heading="About"
        show={handleActive}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        sapiente doloribus ipsa quae voluptates, a temporibus magni sequi
        expedita? Odit, voluptatem perferendis. Doloremque quis ad reiciendis
        porro quod laudantium sapiente modi neque at ullam nulla, deserunt qui
        in error repellendus molestiae debitis facere dicta aperiam! Illum ipsum
        laborum quae culpa dignissimos eius autem recusandae at, maiores minus.
        Voluptas vero repellendus dolorem distinctio, numquam quae incidunt
        possimus velit, perspiciatis itaque officia! Earum, ab dolore. Impedit
        quaerat neque libero magnam corrupti, necessitatibus molestias
        obcaecati, quam modi facilis autem sequi distinctio? Corporis repellat
        fugiat ducimus unde dolores perferendis eum temporibus tempore. Minima,
        recusandae?
      </Panel>
      <Panel
        key="2"
        ind="1"
        isActive={active[1]}
        heading="Our People"
        show={handleActive}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        sapiente doloribus ipsa quae voluptates, a temporibus magni sequi
        expedita? Odit, voluptatem perferendis. Doloremque quis ad reiciendis
        porro quod laudantium sapiente modi neque at ullam nulla, deserunt qui
        in error repellendus molestiae debitis facere dicta aperiam! Illum ipsum
        laborum quae culpa dignissimos eius autem recusandae at, maiores minus.
        Voluptas vero repellendus dolorem distinctio, numquam quae incidunt
        possimus velit, perspiciatis itaque officia! Earum, ab dolore. Impedit
        quaerat neque libero magnam corrupti, necessitatibus molestias
        obcaecati, quam modi facilis autem sequi distinctio? Corporis repellat
        fugiat ducimus unde dolores perferendis eum temporibus tempore. Minima,
        recusandae?
      </Panel>
      <Panel
        key="3"
        ind="2"
        isActive={active[2]}
        heading="Our Company"
        show={handleActive}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        sapiente doloribus ipsa quae voluptates, a temporibus magni sequi
        expedita? Odit, voluptatem perferendis. Doloremque quis ad reiciendis
        porro quod laudantium sapiente modi neque at ullam nulla, deserunt qui
        in error repellendus molestiae debitis facere dicta aperiam! Illum ipsum
        laborum quae culpa dignissimos eius autem recusandae at, maiores minus.
        Voluptas vero repellendus dolorem distinctio, numquam quae incidunt
        possimus velit, perspiciatis itaque officia! Earum, ab dolore. Impedit
        quaerat neque libero magnam corrupti, necessitatibus molestias
        obcaecati, quam modi facilis autem sequi distinctio? Corporis repellat
        fugiat ducimus unde dolores perferendis eum temporibus tempore. Minima,
        recusandae?
      </Panel>
    </div>
  );
}
