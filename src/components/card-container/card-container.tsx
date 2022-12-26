import { FC, memo } from "react";
import styled from "@emotion/styled";
import { useLocalStorage } from "react-haiku";
import { Photo } from "../../types/photo.types";
import Card from "../card/card";

const CardContainerStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
  row-gap: 1rem;
  max-width: 75%;
  height: fit-content;
  margin: 0 auto;
  padding: 2.5rem;

  @media only screen and (max-width: 768px) {
    min-width: 100%;
  }

  @media only screen and (max-width: 600px) {
    padding: 0;
  }
`;

const CardContainer: FC<{ photos: Photo[] | undefined }> = memo(({ photos }) => {
  const [value, setValue] =
    useLocalStorage<{ key: number; value: Photo }[]>("photos");

  const onBookmarkPhoto = (photo: Photo, bookmarked: boolean) => {
    if (value?.length > 0) {
      if (bookmarked) {
        const filteredValues = value?.filter((p) => p.key !== photo.id);

        setValue([...filteredValues]);
      } else {
        setValue([...value, { key: photo.id, value: photo }]);
      }
    } else {
      setValue([{ key: photo.id, value: photo }]);
    }
  };
  return (
    <CardContainerStyled>
      {photos?.map((obj) => {
        const { launch_date, landing_date, name } = obj.rover;
        const { full_name, name: camName } = obj.camera;

        /** TODO improve performance  */
        const map = new Map(value?.map((obj) => [obj.key, obj.value]));
        return (
          <Card
            key={obj.id + new Date().getDate()}
            img={obj.img_src}
            launchDate={launch_date}
            landingDate={landing_date}
            earthDatePic={obj.earth_date}
            name={name}
            camFullName={full_name}
            camaraName={camName}
            bookmarked={!!map?.get(obj.id)}
            onBookmark={() => {
              onBookmarkPhoto(obj, !!map?.get(obj.id));
            }}
          />
        );
      })}
    </CardContainerStyled>
  );
});

export default CardContainer;
