import greekSaladImage from "../../../assets/greek-salad.jpg";
import brushettaImage from "../../../assets/brushetta.jpg";
import grilledFishImage from "../../../assets/grilled-fish.jpg";
import MenuCard from "./MenuCard";
import "./Menu.css";
import { Link } from "react-router-dom";
import pages from "../../../constants/Pages";

const meals = [
  {
    name: "Greek Salad",
    image: greekSaladImage,
    price: "$12.99",
    description: `The famous greek salad of crispy lettuce, peppers, olives and 
      our Chicago style feta cheese, garnished with crunchy garlic and rosemary 
      croutons.`,
  },
  {
    name: "Bruschetta",
    image: brushettaImage,
    price: "$7.99",
    description: `Our Bruschetta is made from grilled bread that has been 
      smeared with garlic and seasoned with salt and olive oil.`,
  },
  {
    name: "Grilled Fish",
    image: grilledFishImage,
    price: "$5.00",
    description: `This comes straight from grandma's recipe book, every last 
      ingredient has been sourced and is as authentic as can be imagined.`,
  },
];

const Menu = () => {
  return (
    <section className="container grid menu">
      <div className="menu-header">
        <h2>Specials</h2>
        <Link className="button-primary" to={pages["orderOnline"].path}>
          Online Menu
        </Link>
      </div>
      {meals.map((meal, index) => (
        <MenuCard key={index} meal={meal} />
      ))}
    </section>
  );
};

export default Menu;
