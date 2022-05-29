import React from "react";
import styles from "../SASS/Products.module.scss";
import background from "../images/back01.png";
import i18n from "../i18n/i18n";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  console.log(i18n.dir());
  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <div className={styles.images}>
          <img
            className={styles.img_background}
            src={background}
            alt="backgroundProduct"
          />
          <img
            className={
              i18n.dir() === "rtl" ? styles.img_product_rtl : styles.img_product
            }
            src={image}
            alt="product"
          />
        </div>
        <div className={styles.titles}>
          <h4>{name}</h4>
          <p>{title}</p>
        </div>
      </div>

      <div className={styles.buttons}>
        <div className={i18n.language === "fa" ? styles.priceFa : styles.price}>
          <h2>$ {price}</h2>
        </div>
        <div className={styles.quantityCounter}>
          <h4 className={styles.add} onClick={addProduct}>
            +
          </h4>
          <h4
            className={
              i18n.language === "fa" ? styles.quantityFa : styles.quantity
            }
          >
            {quantity}
          </h4>
          <h4 className={styles.minus} onClick={minusProduct}>
            -
          </h4>
        </div>
        <div onClick={deleteProduct} className={styles.deleteProduct}>
          <h4 className={styles.deleted}>x</h4>
        </div>
      </div>
    </div>
  );
};

export default Products;
