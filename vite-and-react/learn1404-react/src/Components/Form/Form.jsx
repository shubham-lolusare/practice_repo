import { useState } from "react";

export default function Form() {
  let [status, setStatus] = useState("empty");
  let [answer, setAnswer] = useState("");
  let [message, setMessage] = useState("");

  if (status === "fulfilled") {
    return (
      <>
        <p>{message}</p>
        <button
          onClick={() => {
            setStatus("empty");
            setAnswer("");
            setMessage("");
          }}
        >
          {message === "Your guess is wrong" ? "Try again" : "Play again"}
        </button>
      </>
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setStatus("loading");
      await submit(answer);
      setMessage("You have submmitted the correct answer");
    } catch (err) {
      setMessage(err);
    } finally {
      setStatus("fulfilled");
    }
  }

  return (
    <>
      <h1>City quiz</h1>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          name="text"
          id="text"
          cols="30"
          rows="10"
          onChange={(e) => {
            setAnswer(e.target.value);
            setStatus("typing");
          }}
        ></textarea>
        <br />
        <input type="submit" value="Submit" disabled={status === "empty"} />
      </form>
      {status === "loading" && <p>Loading...</p>}
    </>
  );
}

function submit(ans) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ans.toLowerCase() == "lima") {
        resolve();
      } else {
        reject("Your guess is wrong");
      }
    }, 5000);
  });
}
