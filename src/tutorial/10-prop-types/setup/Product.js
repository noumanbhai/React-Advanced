import React from "react";
// import PropTypes from "prop-types";
// import defaultImage from "../../../assets/default-image.jpeg";
const Product = ({ image, name, price }) => {
  console.log(image, price, name);

  return (
    <article className="product">
      <img src={image?.url} alt={name} />
      <h4>{name}</h4>
      <h4>Rs:{price}</h4>
    </article>
  );
};

// Product.propTypes = {
//   image: PropTypes.object.isRequired,
//   name: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
// };
// Product.defaultProps = {
//   name: "default name",
//   price: 5.5,
//   image: "default Image",
// };
export default Product;
