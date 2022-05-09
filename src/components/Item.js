import React, { useState } from "react";
// import { useState } from "react/cjs/react.production.min";

function Item({ name, category }) {
  const [insideCart, toInsideCat] = useState(false);

  function addingToCart() {
    toInsideCat((insideCart) => !insideCart);
  }

  return (
    <li className={insideCart ? "in-cart" : " "}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={insideCart ? " remove" : "add"}onClick={addingToCart}>{ insideCart ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
