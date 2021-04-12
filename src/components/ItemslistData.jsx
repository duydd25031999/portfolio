import React from "react";

const ItemslistData = ({ list }) => (
  <ul className="itemslist__data">
    <li className="itemslist__name">
      <i>{list.title}</i>
    </li>
    {list.content && list.content.map((name, i) => (
      <ItemslistElement itemName={name} key={i} />
    ))}
  </ul>
);

const ItemslistElement = ({ itemName }) => (
  <li className="itemslist__name">
    <span className="itemslist__circle"></span>
    {itemName}
  </li>
);

export default ItemslistData;
