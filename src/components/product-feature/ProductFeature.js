import React from "react";
import { ProductsAbout } from "../../constants/product-about";
import "../../pages/inner-product/inner-product.css";

const ProductFeature = () => {
  return (
    <div>
      <h2>Mahsulot xususiyatlari</h2>
      <table className="table">
        {ProductsAbout.map((product) => (
          <tbody key={product.id}>
            <h5>Zavod mahsuloti ma'lumotlari</h5>

            <tr className="mb-1">
              <td className="mutes">Ishlab chiqaruvchining kodi</td>
              <td className="code">{product.code1}</td>
              <td className="mutes">Ishlab chiqaruvchining kodi</td>
              <td className="code">{product.code1}</td>
            </tr>

            <tr className="mb-1">
              <td className="mutes">Mahsulot kodi</td>
              <td className="code">{product.code2}</td>
              <td className="mutes">Mahsulot kodi</td>
              <td className="code">{product.code2}</td>
            </tr>

            <tr className="mb-1">
              <td className="mutes">Ishlab chiqaruvchining kodi</td>
              <td className="code">{product.code1}</td>
              <td></td>
              <td></td>
            </tr>

            <tr className="mb-1">
              <td className="mutes">Ishlab chiqaruvchining kodi</td>
              <td className="code">{product.code1}</td>
              <td className="mutes">Ishlab chiqaruvchining kodi</td>
              <td className="code">{product.code1}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default ProductFeature;
