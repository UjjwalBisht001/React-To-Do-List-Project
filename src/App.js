import { useState } from "react";
import List from "./list";
import styled from "styled-components";

function App() {
  const [name, setName] = useState("");
  const [editing, setEditing] = useState(false);
  const [list, setList] = useState([]);
  const [editID, setEditID] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(list);
    if (!name) {
      return list;
    }
    if (name && editing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...list, title: name };
          }

          return item;
        })
      );
      setEditing(false);
      setName("");

      setEditID(null);
    } else {
      const nayichize = { id: new Date().getTime().toString(), title: name };
      setList([nayichize, ...list]);
      setName("");
    }
  };

  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    const particularID = list.find((item) => item.id === id);
    setEditing(true);
    setEditID(id);
    setName(particularID.title);
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <h2>To-Do-List</h2>
        <div>
          <input
            type="text"
            className="input"
            placeholder="type something"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="btn">
            {editing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div>
          <List items={list} removeItem={removeItem} editItem={editItem} />

          <button className="btn-clear" onClick={() => setList([])}>
            Clear items
          </button>
        </div>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.main`
  margin: auto;
  text-align: center;

  background-color: #edeade;

  border-radius: 1rem;
  max-width: 430px;
  h2 {
    font-size: 2rem;
  }
  .btn {
    border: transparent;
    border-radius: 0.2rem;
    text-transform: capitalize;
    font-size: 18px;

    background-color: whitesmoke;
  }
  .btn-clear {
    border: transparent;
    border-radius: 0.2rem;
    font-size: 1rem;
    margin-bottom: 2rem;
    text-transform: capitalize;
    color: red;
    background-color: white;
    margin-top: 1rem;
  }
  .input {
    width: 280px;
    border: transparent;
    height: 1.5rem;
    border-radius: 0.1rem;
    margin-bottom: 2rem;
  }
`;

export default App;
