import "./Testimonials.css";
import customers from "../../../constants/customers";
import TestimonialCard from "./TestimonialCard";
const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container grid">
        {customers.map((customer, index) => (
          <TestimonialCard key={index} customer={customer} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
