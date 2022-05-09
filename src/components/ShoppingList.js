import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, toBeSelectedCategory] = useState("All");

  function categoryChange(event) {
    toBeSelectedCategory(event.target.value);
  }

  //filtering the items
  const displayedItmes = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={categoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {displayedItmes.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
