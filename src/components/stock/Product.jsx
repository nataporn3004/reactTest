import axios from "axios";
import React, { useEffect, useState } from "react";

const Product = () => {
  const [name, setName] = useState("");
  const [qty, setQty] = useState(0);
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");

  const [data,setData] = useState([]);

  const addProduct = async () => {
    try {
      const url = `https://workshop-react-api.vercel.app/product`;
      const user_id = localStorage.getItem("user_id");

      const res = await axios.post(url, { name, qty, price, image, user_id });
      fetData();
    } catch (error) {
      console.log(error);
    }
  };
const deleteProduct = async(id) => {
  try {
    const url = `https://workshop-react-api.vercel.app/product/${id}`
    const res = await axios.delete(url)
    fetData()

  } catch {

  }
}


  const fetData = async () => {
    try {
      const user_id = localStorage.getItem("user_id");
      const url = `https://workshop-react-api.vercel.app/product?user_id=${user_id}`;
      const res = await axios.get(url);
      console.log(res.data);
      setData(res.data)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetData;
  }, []);

  return (
    <div className=" flex flex-col  justify-center mt-20 text-center">
      <div className=" bg-white rounded-lg shadow-lg m-10 p-5">
        <input
          className=" border rounded-lg  border-gray-400 py-2 m-4 p-2"
          placeholder="ชื่อสินค้า"
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className=" border rounded-lg  border-gray-400 px-2 m-4 p-2"
          placeholder="จำนวน"
          type="number"
          name="qty"
          onChange={(e) => setQty(e.target.value)}
        />
        <input
          className=" border rounded-lg  border-gray-400 px-2 m-4 p-2"
          placeholder="ราคา"
          type="number"
          name="price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          className=" border rounded-lg  border-gray-400 px-2 m-4 p-2"
          placeholder="รูปภาพ"
          type="text"
          name="image"
          onChange={(e) => setImage(e.target.value)}
        />
        <button
          className=" bg-sky-700 py-2 px-4 rounded-lg  text-white"
          onClick={addProduct}
        >
          create
        </button>
      </div>

      <div className=" bg-white rounded-lg shadow-lg m-10 p-5">
        <div className="relative overflow-x-auto">
          name : {name}
          <br />
          qty : {qty}
          <br />
          price : {price}
          <br />
          imag : {image}
          <br />
          <br />
          <table className="w-full text-sm text-left rtl:text-right">
            <thead className="text-xs text-gray-700 uppercase bg-slate-300 dark:bg-gray-700 dark:text-gray-400">
              <tr className=" text-center">
                 <th scope="col" className="px-6 py-3">
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Product Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3">
                  ราคา
                </th>
               
                <th scope="col" className="px-6 py-3">
                  เพิ่มเติม
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index)=>(
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center" key={index} >
                  <td  className="px-6 py-4">
                    <img src={item.image} alt="" className=" w-20" />
                  </td>
                  <td  className="px-6 py-4">{item.name}</td>
                  <td  className="px-6 py-4">{item.qty}</td>
                  <td  className="px-6 py-4">{item.price}</td>
                  <td className="px-6 py-4">
                  <button className=" bg-yellow-400 py-2 px-4 rounded-lg   m-1 text-white">
                    Edit
                  </button>
                  <button className=" bg-red-600 py-2 px-4 rounded-lg  text-white" onClick={() => deleteProduct(item.id)}>
                    Delete
                  </button>
                </td>
                </tr>
              ))}
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Product;
