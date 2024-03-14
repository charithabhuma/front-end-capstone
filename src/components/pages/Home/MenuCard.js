import { Link } from "react-router-dom";
import pages from "../../../constants/Pages";
import "./MenuCard.css";
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MenuCard = ({ meal }) => {
  return (
    <div className="menu-card">
      <div className="menu-card-image">
        <img src={meal.image} alt={meal.name} />
      </div>
      <div className="menu-card-header">
        <h3>{meal.name}</h3>
        <span>{meal.price}</span>
      </div>
      <div className="menu-card-body-footer">
        <p>{meal.description}</p>
        <Link to={pages["orderOnline"].path}>Order a delivery  <FontAwesomeIcon icon={faMotorcycle} /> </Link>
      </div>
    </div>
  );
};

export default MenuCard;
