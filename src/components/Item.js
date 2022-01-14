import React, {useState} from "react";

function Item({ name, category }) {

  const [item, setItem] = useState(false)
  
  const itemClass = item ? "in-cart" : ""

  function handleCart(){
    setItem(!item)
  }

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}> {item?"Remove From Cart":"Add to Cart"}</button>
    </li>
  );
}

export default Item;