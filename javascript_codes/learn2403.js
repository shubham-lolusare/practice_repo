// let btn = document.getElementById("btn");

// btn.addEventListener("click", fetchData);

// function fetchData() {
//   let url =
//     "https://github.com/slolusare96/practice_repo/blob/main/javascript_codes/json_files/example.json";
//   let res = fetch(url);

//   res
//     .then((res) => {
//       console.log(res);
//       return res.json();
//     })
//     .then((data) => {
//       return data;
//     });
// }

// let btn2 = document.getElementById("btn2");

// btn2.addEventListener("click", () => {
//   let color = `rgb(${getRandomInt(0, 255)},${getRandomInt(
//     0,
//     255
//   )},${getRandomInt(0, 255)})`;
//   document.body.style.backgroundColor = color;
// });

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
// }

// let user = {
//   name: "Shubham",
//   surname: "Lolusare",
//   age: 26,
// };

// let url =
//   "https://github.com/slolusare96/practice_repo/blob/main/javascript_codes/json_files/example.json";

// let response = fetch(url, {
//   mode: "no-cors",
// });

// response
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

// let username = document.getElementById("usr_name");
// let form = document.getElementById("form");

// form.onsubmit = (event) => {
//   event.preventDefault();
//   getUsers(username.value);
// };

// function getUsers(name) {
//   let url = `https://api.github.com/users/${name}`;

//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       let sr = 1;
//       for (let key in data) {
//         let str = `${sr}. ${key} : ${data[key]}`;
//         let para = document.createElement("p");
//         let text = document.createTextNode(str);
//         para.append(text);
//         document.body.append(para);
//         sr++;
//       }
//     });
// }

let user = {
  name: "shubham",
  surname: "lolusare",
  age: 26,
};

let url = "http://localhost:3000/postData";

let prom = fetch(url, {
  method: "POST",
  headers: {
    "Content-type": "application/json;charset=utf-8",
  },
  body: JSON.stringify(user),
});

let prom2 = fetch(url);

prom2.then((res) => res.json()).then((data) => console.log(data));

// window.addEventListener("load", () => {
//   function sendData() {
//     const XHR = new XMLHttpRequest();

//     // Bind the FormData object and the form element
//     const FD = new FormData(form);

//     // Define what happens on successful data submission
//     XHR.addEventListener("load", (event) => {
//       alert(event.target.responseText);
//     });

//     // Define what happens in case of error
//     XHR.addEventListener("error", (event) => {
//       alert("Oops! Something went wrong.");
//     });

//     // Set up our request
//     XHR.open("POST", url);

//     // The data sent is what the user provided in the form
//     XHR.send(FD);
//   }

//   // Get the form element
//   const form = document.getElementById("myForm");

//   // Add 'submit' event handler
//   form.addEventListener("submit", (event) => {
//     event.preventDefault();

//     sendData();
//   });
// });
