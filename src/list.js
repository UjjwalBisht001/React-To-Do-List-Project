import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import styled from "styled-components";

const list = ({ items, removeItem, editItem }) => {
  return (
    <div>
      {items.map((item) => {
        const { id, title } = item;
        return (
          <Wrapper key={id}>
            <p>{title}</p>
            <div className="btns">
              <button className="edit" onClick={() => editItem(id)}>
                <FaEdit></FaEdit>
              </button>
              <button className="trash" onClick={() => removeItem(id)}>
                <FaTrash></FaTrash>
              </button>
            </div>
          </Wrapper>
        );
      })}
    </div>
  );
};

const Wrapper = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 30px;
  margin-right: 30px;
  background-color: white;
  margin-top: 1rem;
  border-radius: 0.3rem;

  p {
    margin-top: 0.2rem;
    margin-bottom: 0.3rem;
    margin-left: 0.6rem;
  }
  .trash {
    color: red;
    background-color: white;
    border: transparent;
    font-size: 1rem;
    border-radius: 0.2rem;
  }

  .edit {
    color: green;
    background-color: white;
    border: transparent;
    font-size: 1rem;
    border-radius: 0.2rem;
    margin-left: 0.2rem;
  }
  .btns {
    display: flex;
    justify-content: space-between;
  }
`;

export default list;
