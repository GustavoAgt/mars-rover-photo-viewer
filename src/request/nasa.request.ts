import axios from "axios";
import { CURIOSITY_ENDPOINT } from "../constants/api";
import { Photos } from "../types/photos.types";

export const httpGetCuriosityPhotos = async () => {
  return await axios.get<Photos>(`${CURIOSITY_ENDPOINT}`);
};
