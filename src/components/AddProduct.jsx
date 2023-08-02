import React, { useState } from "react";
import { productContext, useProduct } from "../context/ProductContextProvider";

const AddProduct = () => {
  const { addProduct, getProduct } = useProduct(productContext);

  const [title, setTitle] = useState("")
  const [descr, setDescr] = useState("")
  const [image, setImage] = useState("")
  const [video, setVideo] = useState("")

  function addMovies(){
    let newObj = {
      title: title,
      descr: descr,
      image: image,
      video: video
    }
    addProduct(newObj)
  }


  return (
    <div className="flex items-center justify-center mt-[160px]">
      <form className="bg-[#181818] rounded-[20px]  flex items-center justify-center flex-col h-[400px] w-[500px]">
        <div className="m-[20px]">
          <input
            onChange={(e)=> setTitle(e.target.value)}
            className="w-[270px] h-[40px] rounded-[10px] pl-[10px] text-[20px]"
            type="text"
            name="image"
          />
        </div>
        <div className="m-[20px]">
          <input
            onChange={(e)=> setDescr(e.target.value)}
            className="w-[270px] h-[40px] rounded-[10px] pl-[10px] text-[20px]"
            type="text"
            name="title"
          />
        </div>
        <div className="m-[20px]">
          <input
            onChange={(e)=> setImage(e.target.value)}
            className="w-[270px] h-[40px] rounded-[10px] pl-[10px] text-[20px]"
            type="text"
            name="price"
          />
        </div>
        <div className="m-[20px]">
          <input
            onChange={(e)=> setVideo(e.target.value)}
            className="w-[270px] h-[40px] rounded-[10px] pl-[10px] text-[20px]"
            type="text"
            name="price"
          />
        </div>
        <button
          onClick={() => addMovies}
          className="py-[8px] px-[40px] mt-[10px] rounded-[14px] text-[#fff] text-[20px] bg-[green]"
        >
          add
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
