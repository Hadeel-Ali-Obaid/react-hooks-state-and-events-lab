import React, { useState } from "react";

function Item({ name, category }) {

  const [add, setAdd] = useState(false);
  const cart = add ? "in-cart": ""
  const buttonText = add ? "Remove From Cart" : "Add to Cart"

  function handleClick() {
    const  added = (() => {
      if (add === true) {
        return false;
      } else {
        return true;
      }
    });
    setAdd(added);
  }

  return (
    <li className={cart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{buttonText}</button>
    </li>
  );
}

export default Item;
