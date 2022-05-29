import React, { useEffect, useState } from "react";
import styles from "../SASS/ProductsComp.module.scss";
import logo from "../images/logo.png";
import greenImg from "../images/priscilla.png";
import Products from "./Products";
import { useProduct, useSetProduct } from "./ProductsProvider";
import { BiSad } from "react-icons/bi";
import Select from "react-select";
import { useTranslation } from "react-i18next";
import i18n from "../i18n/i18n";

const ProductsComp = () => {
  const { t } = useTranslation();
  const product = useProduct();
  const dispatch = useSetProduct();
  const [value, setValue] = useState();
  const handlerChange = (e) => {
    dispatch({ type: "sort", event: e });
    setValue(e);
    console.log(e);
  };
  const lang = localStorage.getItem("lang") || "en";

  const selectHandler = (e) => {
    console.log(e.target.value);
    i18n.changeLanguage(e.target.value);
    localStorage.setItem("lang", e.target.value);
    // window.location.reload();
  };
  useEffect(() => {
    if (lang) {
      return i18n.changeLanguage(lang);
    }
  }, [lang]);

  document.documentElement.dir = i18n.dir();

  const options = [
    { value: "low", label: "Lowest" },
    { value: "high", label: "Highest" },
  ];

  return (
    <div className={styles.container}>
      <header>
        <div className={styles.headerBar}>
          <img className={styles.header__logo} src={logo} alt="Logo" />
          <select onChange={selectHandler} value={lang}>
            <option value="en">En</option>
            <option value="fa">Fa</option>
            <option value="de">De</option>
          </select>
        </div>
        <div className={styles.headerBox}>
          <h2 className={styles.cartTitle}>
            {t("SHOPPING CART")}:
            <p className={styles.cartTotal}>{product.length}</p>
          </h2>
          <Select
            className={styles.orderBox}
            value={value}
            onChange={handlerChange}
            options={options}
          />
        </div>
      </header>
      <section>
        {product.length <= 0 ? (
          <div
            style={{
              marginTop: "5rem",
              color: "#FE5353",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <h2>
              {t("Cart is Empty")} <BiSad />
            </h2>
          </div>
        ) : (
          product.map((item) => {
            return (
              <Products
                key={item.id}
                image={item.img}
                name={i18n.language === "fa" ? item.nameFa : item.name}
                title={i18n.language === "fa" ? item.titleFa : item.title}
                price={item.price}
                quantity={item.quantity}
                addProduct={() => dispatch({ type: "add", id: item.id })}
                minusProduct={() => dispatch({ type: "minus", id: item.id })}
                deleteProduct={() => dispatch({ type: "delete", id: item.id })}
              />
            );
          })
        )}
      </section>
      <footer className={styles.footer}>
        <h4>{t("SUBTOTAL")}</h4>
        <h4>
          $
          {product.reduce((total, item) => {
            return total + item.price * item.quantity;
          }, 0)}
        </h4>
      </footer>
      <div>
        <img className={styles.greenImg} src={greenImg} alt="greenImg" />
      </div>
    </div>
  );
};

export default ProductsComp;
