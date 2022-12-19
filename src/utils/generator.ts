import { Photo } from "../types/photo.types";

export const generateCardInfo = (value: string, photos?: Photo[]) => {
  const arr: Photo[] = [];
  if (photos) {
    Array.from({ length: +value }).forEach(() => {
      arr.push(photos[Math.floor(Math.random() * photos.length)]);
    });
  }

  return arr;
};
