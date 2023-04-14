import { useState } from "react";
import { useReducer } from "react";
import ListItem from "../ListItem/ListItem";
let id = 0;

export default function ActionList() {
  //   let [itemArr, setItemArr] = useState([]);
  let [itemArr, dispatch] = useReducer(myReducer, []);

  let [itemName, setItemName] = useState("");

  function handleItemChange(e) {
    setItemName(e.target.value);
  }

  function handleAddItem() {
    // setItemArr([
    //   ...itemArr,
    //   {
    //     id: ++id,
    //     name: itemName,
    //   },
    // ]);
    dispatch({
      type: "add",
      id: ++id,
      name: itemName,
    });
  }

  function handleChangeName(task) {
    // setItemArr(
    //   itemArr.map((obj) => {
    //     if (task.id == obj.id) {
    //       return task;
    //     } else {
    //       return obj;
    //     }
    //   })
    // );
    dispatch({
      type: "change",
      task: task,
    });
  }

  function handleDeleteName(id) {
    // setItemArr(itemArr.filter((obj) => obj.id != id));
    dispatch({
      type: "delete",
      id: id,
    });
  }

  return (
    <>
      <div>
        <input type="text" name="item" id="item" onChange={handleItemChange} />{" "}
        <button onClick={handleAddItem}>Add</button>
      </div>
      <div>
        {itemArr.map((obj) => {
          return (
            <ListItem
              key={obj.id}
              data={obj}
              onChangeName={handleChangeName}
              onDeleteName={handleDeleteName}
            />
          );
        })}
      </div>
    </>
  );
}

function myReducer(itemArr, action) {
  switch (action.type) {
    case "add": {
      return [
        ...itemArr,
        {
          id: action.id,
          name: action.name,
        },
      ];
    }
    case "change": {
      return itemArr.map((obj) => {
        if (action.task.id == obj.id) {
          return action.task;
        } else {
          return obj;
        }
      });
    }
    case "delete": {
      return itemArr.filter((obj) => obj.id != action.id);
    }
  }
}
