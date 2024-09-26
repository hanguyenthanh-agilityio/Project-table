import axios from "axios";

export const axiosClient = axios.create({
  //   baseURL: process.env.API_URL,
  baseURL: "https://66ea827255ad32cda4792c16.mockapi.io",
  headers: {
    "Content-Type": "application/json",
  },
});
