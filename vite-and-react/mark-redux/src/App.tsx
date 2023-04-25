import { useAppDispatch, useAppSelector } from "./app/hooks";
import { incremented, amountAdded } from "./features/counter/counterSlice";
import { useFetchBreedsQuery } from "./features/dogs/dogs-api-slice";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const { data = [], isFetching } = useFetchBreedsQuery(5);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(amountAdded(3))}>
          count is {count}
        </button>
        <div>Number of dogs fetched : {data.length}</div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Picture</th>
            </tr>
          </thead>
          <tbody>
            {data.map((breed) => (
              <tr key={breed.id}>
                {" "}
                <td>{breed.name}</td>
                <td>
                  <img
                    src={breed.image.url}
                    alt="dog"
                    width={250}
                    height={250}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
