import React, { useState, useEffect } from "react";
import styles from "../SASS/Products.module.css";
import background from "../images/back01.png";
import { useProduct } from "./ProductsProvider";
import { useTransition, animated } from "react-spring";

const Products = ({
  image,
  name,
  title,
  price,
  quantity,
  addProduct,
  minusProduct,
  deleteProduct,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <div className={styles.images}>
          <img
            className={styles.img_background}
            src={background}
            alt="backgroundProduct"
          />
          <img className={styles.img_product} src={image} alt="product" />
        </div>
        <div className={styles.titles}>
          <h4>{name}</h4>
          <p>{title}</p>
        </div>
      </div>

      <div className={styles.buttons}>
        <div className={styles.price}>
          <h2>$ {price}</h2>
        </div>
        <div className={styles.quantityCounter}>
          <h4 onClick={addProduct}>+</h4>
          <h4 className={styles.quantity}>{quantity}</h4>
          <h4 onClick={minusProduct}>-</h4>
        </div>
        <div onClick={deleteProduct} className={styles.deleteProduct}>
          <h4>x</h4>
        </div>
      </div>
    </div>
  );
};

export default Products;
