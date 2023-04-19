import { useReducer, createContext } from "react";
import AddBar from "./Components/AddBar";
import TaskList from "./TaskList";
import { DispatchContext } from "../assets/context";

export function App() {
  let [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <DispatchContext.Provider value={dispatch}>
      <div>
        <h1>Todays Tasks</h1>
        <AddBar></AddBar>
        {tasks.map((obj, i) => {
          return <TaskList key={i + 1} taskData={obj} iden={i} />;
        })}
      </div>
    </DispatchContext.Provider>
  );
}

function taskReducer(task, action) {
  switch (action.type) {
    case "add": {
      return [
        ...task,
        {
          id: action.id,
          text: action.text,
        },
      ];
    }
    case "edit": {
      return task.map((obj) => {
        if (obj.id == action.id) {
          return {
            id: action.id,
            text: action.text,
          };
        } else {
          return obj;
        }
      });
    }
    case "delete": {
      return task.filter((obj) => {
        if (obj.id != action.id) return obj;
      });
    }
  }
}
