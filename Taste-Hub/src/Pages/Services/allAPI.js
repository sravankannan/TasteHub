
import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

export const getAllRecipesAPI = () => {
  return axios.get(`${BASE_URL}/recipes`);
};

export const addRecipeAPI = (recipe) => {
  return axios.post(`${BASE_URL}/recipes`, recipe);
};

export const getSingleRecipeAPI = (id) => {
  return axios.get(`${BASE_URL}/recipes/${id}`);
};


export const deleteRecipeAPI = (id) => {
  console.log("Deleting recipe ID:", id);
  return axios.delete(`${BASE_URL}/recipes/${id}`);
};

export const updateRecipeAPI = (id, recipe) => {
  return axios.put(`${BASE_URL}/recipes/${id}`, recipe);
};
