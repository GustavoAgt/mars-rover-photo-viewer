import { useMemo } from "react";
import styled from "@emotion/styled";
import { useLocalStorage } from "react-haiku";
import Card from "../components/card/card";
import Header from "../components/mobile/header/header";
import SideBar from "../components/sidebar/sidebar";
import logo from "../resources/images/mars-rover2.png";
import { Photo } from "../types/photo.types";

import "./bookmarks.styles.scss";
import BottomNav from "../components/bottom-nav/bottom-nav.component";

const CardContainer = styled.div`
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
`;

const CardSlideContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10rem;
`;
const BottomContainer = styled.div`
  display: none;
  z-index: 1;
  @media screen and (max-width: 768px) {
    margin: 0 auto;
    display: inherit;
    position: fixed;
    bottom: 0;
    width: 100vw;
  }
`;

const NoContent = styled.span`
  position: absolute;
  top: 50%;
  left: 55%;
  transform: translate(-50%, 50%);
  font-size: 3.5rem;
  color: #000;

  @media only screen and (max-width: 768px) {
    font-size: 3rem;
    top: 35%;
  }
`;

const Bookmarks = () => {
  const [value, setValue] =
    useLocalStorage<{ key: number; value: Photo }[]>("photos");

  const extractPhotos = (data: { key: number; value: Photo }[]) => {
    return data.map((d) => d.value);
  };

  const bookmarkedPics = useMemo(() => extractPhotos(value), [value]);

  const onBookmarkPhoto = (photo: Photo, bookmarked: boolean) => {
    if (value?.length > 0) {
      if (bookmarked) {
        const filteredValues = value?.filter((p) => p.key !== photo.id);
        console.log(value, filteredValues, "bookmarked");

        setValue([...filteredValues]);
      } else {
        setValue([...value, { key: photo.id, value: photo }]);
      }
    } else {
      setValue([{ key: photo.id, value: photo }]);
    }
  };
  return (
    <div className="bookmarks">
      <SideBar img={logo} />
      {/* COMPONETIZE CARD CONTAINER */}

      {bookmarkedPics.length < 1 ? (
        <NoContent>No photos has been bookmarked</NoContent>
      ) : (
        <CardSlideContainer>
          {/* Header only for mobile devices */}
          <Header />
          <CardContainer>
            {bookmarkedPics?.map((obj) => {
              const { launch_date, landing_date, name } = obj.rover;
              const { full_name, name: camName } = obj.camera;

              /** TODO improve performance  */
              const map = new Map(value?.map((obj) => [obj.key, obj.value]));
              return (
                <Card
                  key={obj.id}
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
          </CardContainer>
        </CardSlideContainer>
      )}

      <BottomContainer>
        <BottomNav />
      </BottomContainer>
    </div>
  );
};
export default Bookmarks;
