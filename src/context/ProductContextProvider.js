import React, { createContext, useContext, useState } from "react";
import { db } from "../fire";
import { addDoc, collection } from "firebase/firestore";

export const productContext = createContext();
export const useProduct = () => {
  return useContext(productContext);
};

const ProductContextProvider = ({ children }) => {
  const productsCollectionRef = collection(db, "movies");
  const [data, setData] = useState([]);

  //! addProduct
  async function addProduct(data) {
     await addDoc(productsCollectionRef, data);
    // getProduct();
  }

  // async function getProduct() {
  //   const data = await getDocs(productsCollectionRef);
  //   setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  // }
  const values = {
    addProduct,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
