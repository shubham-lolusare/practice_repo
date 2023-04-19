import { useReducer } from "react";
import AddBar from "./AddBar";
import TaskList from "./TaskList";
import { DispatchContext } from "../assets/context";

export function App() {
  let [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <DispatchContext.Provider value={dispatch}>
      <div>
        <h1>Todays Tasks</h1>
        <AddBar></AddBar>
        <ul>
          {tasks.map((obj) => {
            return <TaskList key={obj.id} taskData={obj} iden={obj.id} />;
          })}
        </ul>
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
        return obj.id != action.id;
      });
    }
  }
}
