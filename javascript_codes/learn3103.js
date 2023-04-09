let form = document.getElementById("dataForm");

form.onsubmit = (e) => {
  let url =
    "https://github.com/shubham-lolusare/practice_repo/blob/main/db.json";
  e.preventDefault();

  let data = new FormData(form);

  let obj = {};

  for (let [key, value] of data) {
    obj[key] = value;
  }

  fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(obj),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      console.log("Done!");
    })
    .catch((error) => {
      alert(error);
    });
};
