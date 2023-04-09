// const log = document.querySelector(".event-log");

// document.querySelector("#xhr").addEventListener("click", () => {
//   log.textContent = "";

//   const xhr = new XMLHttpRequest();

//   xhr.addEventListener("loadend", () => {
//     setTimeout(() => {
//       log.textContent = `${log.textContent}Finished with status: ${xhr.status}`;
//     }, 10000);
//   });

//   xhr.open(
//     "GET",
//     "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json"
//   );
//   xhr.send();
//   log.textContent = `${log.textContent}Started XHR request\n`;
// });

// document.querySelector("#reload").addEventListener("click", () => {
//   log.textContent = "";
//   document.location.reload();
// });

// function loadScript(src) {
//   let script = document.createElement("script");
//   script.src = src;
//   document.head.append(script);
// }

// loadScript(
//   "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
// );

// function loadScript(src) {
//   return new Promise((resolve, reject) => {
//     let script = document.createElement("script");
//     script.src = src;

//     script.onload = () => {
//       resolve(src);
//     };
//     script.onerror = () => {
//       reject(new Error(src));
//     };
//     document.head.append(script);
//   });
// }

// let temp_src = prompt("Enter the source cdn");
// let promise = loadScript(temp_src);

// promise.then(
//   (src) => {
//     alert(`Script added with source: ${src}`);
//   },
//   (src) => {
//     alert(`Script rejected with source: ${src.message}`);
//   }
// );

/*
childNodes          Node                            NodeList
parentNode          node                            Element
firstChild          node                            Element
lastCHild           node                            Element
previousSibling     node                            Element
nextSibling         node                            Element

children                document/element            HTMLCollection
parentElement           Node                           
firstElementChild       document/element
lastElementChild        document/element
previousElementSibling      element
nextElementSibling          element

*/

document.addEventListener("click", (event) => {
  let el = document.getElementById(event.target.dataset.toggleId);
  el.hidden = el.hidden ? false : true;

  let btn = document.getElementsByTagName("button");

  if (el.hidden) {
    btn[0].innerText = "Show the subscription form";
  } else {
    btn[0].innerText = "Hide the subscription form";
  }
});
