import React, { useState } from "react";
import Products from "../productsCategory.json";

const ProductCategory = () => {
  const [products, getProducts ] = useState(Products);
  const productData = products.data.nodes;

  function filterResult(category){
   
    
    return   productData.filter((product) => {
      let data = ''
      if(product.category.name === category){
        data =  product.category.name
        return data
      } 
    });
  
  };


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
            <button className="btn" onClick={() => getProducts(Products)}>
              Todos
            </button>
            <button className="btn" onClick={(category) => filterResult("Aerosol")}>
              Aerosol
            </button>
            <button className="btn" onClick={() => filterResult("Jabón Barra")}>
              Sabão Barra
            </button>
            <button
              className="btn"
              onClick={() => filterResult("Jabón Líquido")}
            >
              Sabão Líquido
            </button>
            <button className="btn" onClick={() => filterResult("Talco")}>
              Talco
            </button>
          </div>
          <div className="col">
            <div className="cards">
              {filterResult('Talco').map((product, key) => {
                return (
                  <div className="card" key={key}>
                    <div className="card-header">
                      <img
                        src={product.images[0].asset}
                        alt={product.category.name}
                      />
                    </div>
                    <div className="card-body"></div>
                    <h2 className="titleProduct">{product.name}</h2>
                    <p className="category">{product.shortDescription}</p>
                    <div className="card-footer"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCategory;
