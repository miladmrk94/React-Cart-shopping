import React from "react";
import styles from "../SASS/ProductsComp.module.css";
import logo from "../images/logo.png";
import greenImg from "../images/priscilla.png";
import Products from "./Products";
import { useProduct, useSetProduct } from "./ProductsProvider";
import { BiSad } from "react-icons/bi";

const ProductsComp = () => {
  const product = useProduct();
  const dispatch = useSetProduct();

  return (
    <div className={styles.container}>
      <header>
        <img className={styles.header__logo} src={logo} alt="Logo" />
        <h2>SHOPPING CART</h2>
      </header>
      <section
        style={{
          overflowY: "scroll",
          height: "500px",
          textAlign: "center",
        }}
      >
        {product.length <= 0 ? (
          <div style={{ marginTop: "5rem", color: "#FE5353" }}>
            <h2>
              Cart is Empty <BiSad />
            </h2>
          </div>
        ) : (
          product.map((item) => {
            return (
              <Products
                key={item.id}
                image={item.img}
                name={item.name}
                title={item.title}
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
        <h4>SUBTOTAL</h4>
        <h4>$50</h4>
      </footer>
      <div>
        <img className={styles.greenImg} src={greenImg} alt="greenImg" />
      </div>
    </div>
  );
};

export default ProductsComp;
