import "./App.scss";
import ProductsComp from "./Components/ProductsComp";
import PaymentComp from "./Components/PaymentComp";
import ProductsProvider from "./Components/ProductsProvider";

function App() {
  return (
    <ProductsProvider>
      <div className="App">
        <section className="ItemOne">
          <ProductsComp />
        </section>
        <section className="ItemTwo">
          <PaymentComp />
        </section>
      </div>
    </ProductsProvider>
  );
}

export default App;
