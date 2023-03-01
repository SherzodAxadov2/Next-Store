import React from "react";
import { ProductsTable } from "../../constants/ProductTable";
import "../../pages/inner-product/inner-product.css";

const ProductTable = () => {
  return (
    <div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label
          className="form-check-label prod-label"
          htmlFor="flexCheckDefault"
        >
          Arzon narxlardan boshlash
        </label>
      </div>

      <table className="table">
        <tbody>
          {ProductsTable.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.img} alt="" />
              </td>
              <td>
                <p>{item.text}</p>
              </td>
              <td>
                <h4>{item.company}</h4>
              </td>
              <td>
                <p>{item.price}</p>
              </td>
              <td>
                <span className={`${item.type === "Yangi" ? "blue" : ""}`}>
                  {item.type}
                </span>
              </td>
              <td className="see-more">
                <a href={"/filter"}>Do’kondan ko'rish</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
