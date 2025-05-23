import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
  const handleItemClick = () => {
    console.log(`Navigating to /product/${props.id}`);
    window.scrollTo(0, 0); 
  };

  return (
    <div>
      {/* Console log will tell if click event works */}
      <Link to={`/product/${props.id}`} onClick={handleItemClick}>
        <img src={props.image} alt={props.name} />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price new">₹{props.new_price}</div>
        <div className="item-price-old">₹{props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
