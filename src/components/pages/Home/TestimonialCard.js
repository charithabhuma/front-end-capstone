import "./TestimonialCard.css";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ratingLevels = { 0.5: faStarHalfStroke, 1: faStar };

const TestimonialCard = ({ customer }) => {
  return (
    <article className="testimonial-card">
      <img src={customer.image} alt={customer.name} />
      <h4>{customer.name}</h4>
      <span>
        {customer.rating.map((ratingPoint, index) => (
          <FontAwesomeIcon
            key={index}
            icon={ratingLevels[ratingPoint]}
            size="xs"
          />
        ))}
      </span>
      <blockquote>
        <p>"{customer.description}"</p>
      </blockquote>
    </article>
  );
};

export default TestimonialCard;
