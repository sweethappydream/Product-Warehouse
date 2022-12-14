import { useEffect, useState } from "react";
import { getAllCategories } from "../api/category";
import { addProduct } from "../api/product";

export default function Register() {
  const [categories, setCategories] = useState([]);
  const [specAttr, setSpecAttr] = useState([]);
  const [data, setData] = useState({});
  const [spec, setSpec] = useState({});
  const changeCategory = (e) => {
    //console.log(e.target.value)
    if (e.target.value == 0) {
      setData({});
      return;
    }
    const selected = categories.filter((item) => item._id == e.target.value)[0];
    setSpecAttr(selected.spec);
    setSpec({});
    handleChange(e);
  };

  const specChange = (e) => {
    if (e.target.value == 0) {
      setSpec({});
    }
    setSpec({
      ...spec,
      [e.target.name]: e.target.value,
    });
  };
  const register = (e) => {
    e.preventDefault();
    const submitData = { ...data, spec: { ...spec } };
    addProduct(submitData)
      .then((result) => {
        alert(result.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData({ ...data, [name]: value });
  };
  useEffect(() => {
    const getCategories = async () => {
      const retData = await getAllCategories();
      setCategories(retData);
      setData({ ...data, category: retData[0]._id });
      setSpecAttr(retData[0].spec);
    };
    getCategories();
  }, []);

  const drawSpecAttr = () => {
    let result = [];
    for (let key in specAttr) {
      if (typeof specAttr[key] == "object") {
        const specKey = Object.keys(specAttr[key])[0];
        const attrNames = specAttr[key][specKey];
        //setSpec({ ...spec, [specKey]: attrNames[0] })
        result.push(
          <div className="flex items-center justify-between my-4" key={key}>
            {specKey}:
            <select
              onChange={specChange}
              name={specKey}
              defaultValue={"Choose one"}
              className="rounded-md w-48 text-black p-1"
            >
              <option value={0}>Select One</option>
              {attrNames.map((item, idx) => (
                <option value={item} key={idx}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        );
      } else {
        result.push(
          <div className="flex items-center justify-between my-4" key={key}>
            {specAttr[key]}:
            <input
              name={specAttr[key]}
              type="number"
              onChange={specChange}
              className="w-48 rounded-md outline-none px-3 py-1 text-black focus:outline-cyan-300"
            ></input>
          </div>
        );
      }
    }
    return result;
  };
  return (
    <div className="flex w-full h-full items-center justify-center">
      <div className="w-2/4 p-6 justify-around h-fit rounded-xl bg-gray-500 bg-card shadow-sm text-white">
        <form onSubmit={register}>
          <div className="flex items-center justify-between my-4">
            Category:
            <select
              name="category"
              onChange={changeCategory}
              defaultValue={"Choose one"}
              className="rounded-md w-48 text-black p-1"
            >
              <option value={0}>Select One</option>
              {categories.map((item, idx) => (
                <option value={item._id} key={idx}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center justify-between my-4">
            Name:
            <input
              onChange={handleChange}
              name="name"
              className="w-48 rounded-md outline-none px-3 py-1 text-black focus:outline-cyan-300"
            ></input>
          </div>
          <div className="flex items-center justify-between my-4">
            SKUs:
            <input
              onChange={handleChange}
              name="sku"
              className="w-48 rounded-md outline-none px-3 py-1 text-black focus:outline-cyan-300"
            ></input>
          </div>
          <div className="flex items-center justify-between my-4">
            Brand:
            <input
              onChange={handleChange}
              name="brand"
              className="w-48 rounded-md outline-none px-3 py-1 text-black focus:outline-cyan-300"
            ></input>
          </div>
          <div className="flex items-center justify-between my-4">
            Cost:
            <input
              onChange={handleChange}
              type="number"
              name="cost"
              className="w-48 rounded-md outline-none px-3 py-1 text-black focus:outline-cyan-300"
            ></input>
          </div>
          {drawSpecAttr()}
          <div className="w-full flex justify-end">
            <button className="px-5 py-2 rounded-md bg-gray-700 w-fit hover:bg-gray-900">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
