import React, { useEffect, useState } from "react";
import { productContext, useProduct } from "../context/ProductContextProvider";

const AddProduct = () => {
  const { addProduct, getProduct } = useProduct(productContext);
  // useEffect(() => {
  //   getProduct();
  // }, []);
  console.log(addProduct);
  const [data, setData] = useState({
    image: "",
    title: "",
    price: "",
  });
  const handleInp = (e) => {
    let obj = { ...data, [e.target.name]: e.target.value };
    setData(obj);
  };
  return (
    <div className="flex items-center justify-center mt-[160px]">
      <form className="bg-[#181818] rounded-[20px]  flex items-center justify-center flex-col h-[400px] w-[500px]">
        <div className="m-[20px]">
          <input
            onChange={handleInp}
            className="w-[270px] h-[40px] rounded-[10px] pl-[10px] text-[20px]"
            type="text"
            name="image"
            value={data.image}
          />
        </div>
        <div className="m-[20px]">
          <input
            onChange={handleInp}
            className="w-[270px] h-[40px] rounded-[10px] pl-[10px] text-[20px]"
            type="text"
            name="title"
            value={data.title}
          />
        </div>
        <div className="m-[20px]">
          <input
            onChange={handleInp}
            className="w-[270px] h-[40px] rounded-[10px] pl-[10px] text-[20px]"
            type="text"
            name="price"
            value={data.price}
          />
        </div>
        <button
          onClick={() => addProduct(data)}
          className="py-[8px] px-[40px] mt-[10px] rounded-[14px] text-[#fff] text-[20px] bg-[green]"
        >
          add
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
