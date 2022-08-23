import React, { useState } from "react";
import Products from "../productsCategory.json";

const ProductCategory = () => {
  const [products] = useState(Products);
  const productData = products.data.nodes;
  console.log(products)

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="title">Filtre por Categoria</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button className="btn">Todos</button>
            <button className="btn"> 1</button>
            <button className="btn">2</button>
            <button className="btn">3</button>
          </div>
          <div className="col">
            <div className="cards">
              
            </div>
          </div>
        </div>
        {productData.map((product, key) => {
          return (
            <div className="cards" key={key}>
              <div className="card" key="">
                <div className="card-header">
                  <img src={product.images[0].asset} alt={product.name}  />
                </div>
                <div className="card-body"></div>
                <h2 className="titleProduct">{product.name}</h2>
                <p>{product.shortDescription}</p>
                <div className="card-footer"></div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductCategory;
