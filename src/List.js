import React, { useState } from "react";
import deleteIcon from "./assets/delete.svg";
import editIcon from "./assets/edit.svg";
import "./sass/App.css";

function List() {
  const [isEditing, setIsEditing] = useState(false);
  const [itemIndex, setItemIndex] = useState(0);
  const [value, setValue] = useState("");
  const [myList, setMyList] = useState([]);

  function addItemsToList(e) {
    e.preventDefault();
    setMyList([...myList, value]);
  }

  function getIndexOf(el) {
    for (var i = 0; i < myList.length; i++) {
      if (myList[i] === el) return i;
    }
  }

  function removeItemFromList(el) {
    const newList = myList.filter(
      (item) => getIndexOf(item) !== getIndexOf(el)
    );
    setMyList(newList);
  }

  function editItemFromList(el, id) {
    setIsEditing(true);
    setItemIndex(id);
    document.querySelector("input").value = el;
  }

  function saveEditedItem() {
    const newList = [...myList];
    newList[itemIndex] = value;
    setMyList(newList);
    setIsEditing(false);
  }

  return (
    <div className="box">
      <br />
      <h3>SHOPPING LIST</h3>
      <form>
        <input
          type="text"
          id="inputItem"
          name="inputItem"
          onChange={(e) => setValue(e.target.value)}
        />
        {isEditing && <button onClick={saveEditedItem}>EDIT</button>}
        {!isEditing && <button onClick={addItemsToList}>ADD</button>}
      </form>
      <ul>
        {myList.map((listItem) => (
          <li>
            <h5>{listItem}</h5>
            <img
              src={deleteIcon}
              alt="delete button"
              onClick={() => removeItemFromList(listItem)}
            />
            <img
              src={editIcon}
              alt="edit button"
              onClick={() =>
                editItemFromList(listItem, myList.indexOf(listItem))
              }
            />
          </li>
        ))}
      </ul>
      {myList.length > 0 && (
        <button onClick={() => setMyList([])}>DELETE ALL</button>
      )}
    </div>
  );
}

export default List;
