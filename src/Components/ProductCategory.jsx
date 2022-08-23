import React, { useState, useEffect, useMemo } from "react";
import Products from "../productsCategory.json";

const ProductCategory = () => {
  const [productList, getProducts] = useState(Products, []);
  const [selectedCategory, setSelectedCategory] = useState();

  useEffect(() => {
    getProducts(Products);
  }, []);

  function getFilteredList() {
    if (!selectedCategory) {
      return productList.data.nodes;
    }
    return productList.data.nodes.filter(
      (product) => product.category.name === selectedCategory
    );
  }

  var filteredList = useMemo(getFilteredList, [selectedCategory, productList]);

  function categoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const [data, setData] = useState(Products);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="title">
              Filter by Category
              <select
                name="category-list"
                id="category-list"
                onChange={categoryChange}
              >
                <option value="">Todos</option>
                <option value="Aerosol">Aerosol</option>
                <option value="Barra">Barra</option>
                <option value="Jabón Barra">Sabão em barra</option>
                <option value="Jabón Líquido ">Sabão em liquido</option>
                <option value="Talco">Talco</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <div className="cards">
              {filteredList.map((values, index) => {
                const { id, name, shortDescription, images } = values;
                return (
                  <>
                    <div className="card" key={index}>
                      <div className="card-header">
                        <img src={images[0].asset.url} alt={name} />
                      </div>
                      <div className="card-body">
                        <h2 className="titleProduct">{name}</h2>
                        <span className="category">{shortDescription}</span>
                      </div>
                    </div>
                  </>
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
