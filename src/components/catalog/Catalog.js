import React, { useState } from "react";
import ImgProductDetails from "../imgProductDetails/ImgProductDetails";
import { product } from "../../constants/products/Products";

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState("Все");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <section className="mt-28" id="product">
      <div className="text-center">
        <h2 className="text-3xl uppercase font-semibold">Каталог</h2>
      </div>
      <div className="flex justify-center mt-5 flex-wrap">
        <button
          onClick={() => handleCategoryClick("Все")}
          className={`mr-4 mb-4 ${
            selectedCategory === "Все" ? "border-b border-slate-700" : ""
          }`}
        >
          Все
        </button>
        <button
          onClick={() => handleCategoryClick("Холодильники")}
          className={`mr-4 mb-4 ${
            selectedCategory === "Холодильники"
              ? "border-b border-slate-700"
              : ""
          }`}
        >
         Холодильники
        </button>
        <button
          onClick={() => handleCategoryClick("Стиральные машины")}
          className={`mr-4 mb-4 ${
            selectedCategory === "Стиральные машины"
              ? "border-b border-slate-700"
              : ""
          }`}
        >
          Стиральные машины
        </button>
        <button
          onClick={() => handleCategoryClick("Посудомоечные машины")}
          className={`mr-4 mb-4 ${
            selectedCategory === "Посудомоечные машины"
              ? "border-b border-slate-700"
              : ""
          }`}
        >
          Посудомоечные машины
        </button>
      </div>

      {product.map((el) => {
        if (selectedCategory === "Все" || el.group === selectedCategory) {
          return (
            <div className="mt-20" key={el.id}>
              <h2 className="text-center text-4xl">{el.group}</h2>
              {el.box.map((item) => (
                <div
                  className="mt-12 mb-16 bg-slate-200 sd:py-3 xyy:py-2 sd:px-3 xyy:px-1.5"
                  key={`${el.id}-${item.title}`}
                >
                  <h3 className="text-orange-500 text-center text-2xl font-semibold mb-7">
                    {item.title}
                  </h3>
                  <div className="container mx-auto">
                    {item.children.map((elem) => (
                      <div className="mb-16" key={elem.id}>
                        <ImgProductDetails product={elem} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          );
        }
        return null;
      })}
    </section>
  );
};

export default Catalog;
