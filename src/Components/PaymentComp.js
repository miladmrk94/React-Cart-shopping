import React from "react";
import styles from "../SASS/PaymentComp.module.css";
import { RiVisaLine, RiPaypalFill } from "react-icons/ri";

const PaymentComp = () => {
  return (
    <div className={styles.continuer}>
      <div className={styles.box}>
        <div className={styles.paymentTitle}>
          <h3>PAYMENT</h3>
        </div>
        <div className={styles.paymentMethod}>
          <div>
            <input type="radio" value="Male" name="gender" /> Cash On Delivery
            (COD)
          </div>
          <div>
            <input type="radio" value="Female" name="gender" /> Online Payment
          </div>
        </div>
        <div>
          <button className={styles.btn_paypal}>
            <RiPaypalFill className={styles.paypal} />
          </button>
          <button className={styles.btn_visa}>
            <RiVisaLine className={styles.visa} />
          </button>
        </div>
        <div>
          <div className={styles.form__group}>
            <input
              type="input"
              className={styles.form__field}
              placeholder="Name"
              name="name"
              id="name"
              required
            />
            <label htmlFor="name" className={styles.form__label}>
              CardHolder Name
            </label>
          </div>

          <div className={styles.form__group}>
            <input
              type="input"
              className={styles.form__field}
              placeholder="Family"
              name="Family"
              id="Family"
              required
            />
            <label htmlFor="Family" className={styles.form__label}>
              Card Number
            </label>
          </div>
          <div className={styles.cartData}>
            <div className={styles.form__group}>
              <input
                type="input"
                className={styles.form__field}
                placeholder="Date"
                name="Date"
                id="Date"
                required
              />
              <label htmlFor="Date" className={styles.form__label}>
                Ex. Date
              </label>
            </div>

            <div className={styles.form__group}>
              <input
                type="input"
                className={styles.form__field}
                placeholder="CVV"
                name="CVV"
                id="CVV"
                required
              />
              <label htmlFor="CVV" className={styles.form__label}>
                CVV
              </label>
            </div>
          </div>
        </div>
        <div>
          <button className={styles.checkout}>CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentComp;
