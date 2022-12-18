import { Photo } from "../types/photo.types";

export const generateCardInfo = (photos?: Photo[]) => {
  const arr: Photo[] = [];
  if (photos) {
    Array(6)
      .fill(0)
      .forEach(() => {
        arr.push(photos[Math.floor(Math.random() * photos.length)]);
      });
  }

  return arr;
};
