import React, { useState, useEffect } from "react";
import { getAllCategories } from "../api/category.api";
import { getProducts } from "../api/product.api";
import { NavLink } from "react-router-dom";

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [data, setData] = useState([]);

  const changeCategory = (e) => {
    getDatas(e.target.value);
  };

  const getDatas = async (id) => {
    const datas = await getProducts(id);
    setData(datas);
  };

  useEffect(() => {
    const getCategories = async () => {
      const retData = await getAllCategories();
      getDatas(retData[0]._id);
      setCategories(retData);
    };
    getCategories();
  }, []);
  return (
    <>
      <div className="flex justify-between">
        <select
          name="category"
          onChange={changeCategory}
          defaultValue={"Choose one"}
          className="rounded-md w-48 text-black p-1"
        >
          {categories.map((item, idx) => (
            <option value={item._id} key={idx}>
              {item.name}
            </option>
          ))}
        </select>
        <NavLink to="/register">
          <div className="bg-white text-black p-1 w-36 bg-center rounded-md"> Register </div>
        </NavLink>
      </div>
      <div className="w-full">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="bg-white border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        SKU
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Brand
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Cost
                      </th>
                      {data.length > 0
                        ? Object.keys(data[0].specific).map((key, idx) => (
                            <th
                              key={idx}
                              scope="col"
                              className="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                            >
                              {key}
                            </th>
                          ))
                        : ""}
                    </tr>
                  </thead>
                  <tbody>
                    {data.length > 0
                      ? data.map((item) => (
                          <tr key={item._id} className="bg-gray-100 border-b">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {item.name}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {item.SKU}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {item.brand}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {item.cost}
                            </td>
                            {Object.keys(item.specific).map((specs, idx) => (
                              <td
                                key={idx}
                                className="text-sm text-gray-900 font-light text-center px-6 py-4 whitespace-nowrap"
                              >
                                {item.specific[specs]}
                              </td>
                            ))}
                          </tr>
                        ))
                      : ""}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
}
