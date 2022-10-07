import axios from "axios"
const { API_URL } = require("../config/constants")

const addProduct = (data) => {
  return axios.post(API_URL + "/api/product/add", data);
}

const getProducts = async (catId) => {
  const result = await axios.get(API_URL + "/api/product/list?category_id=" + catId);
  return result.data;
}

export {
  addProduct,
  getProducts
}