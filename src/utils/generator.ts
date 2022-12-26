import { Photo } from "../types/photo.types";

export const generateCardInfo = (
  value?: string,
  photos?: Photo[]
): Promise<Photo[]> => {
  const DEFAULT_VALUE = 4;
  const arr: Photo[] = [];

  return new Promise<Photo[]>((resolve, rejected) => {
    if (photos) {
      Array.from({ length: value ? +value : DEFAULT_VALUE }).forEach(() => {
        arr.push(photos[Math.floor(Math.random() * photos.length)]);
      });
    }

    if (arr.length > 0) {
      resolve(arr);
    } else {
      rejected(new Error(`Error trying to generated cards ${value} photos`));
    }
  });
};
