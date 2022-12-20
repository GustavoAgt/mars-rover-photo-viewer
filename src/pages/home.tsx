import styled from "@emotion/styled";
import { useMemo } from "react";
import { useLocalStorage } from "react-haiku";
import BottomNav from "../components/bottom-nav/bottom-nav.component";

import Card from "../components/card/card";
import Header from "../components/mobile/header/header";
import SideBar from "../components/sidebar/sidebar";
import Slider from "../components/slider/slider";
import Spinner from "../components/spinner/spinner";
import { useAppSelector } from "../hooks/app.hooks";
import useFetchRoversData from "../hooks/useFetchRoversData";

import logo from "../resources/images/mars-rover2.png";
import { Photo } from "../types/photo.types";
import { generateCardInfo } from "../utils/generator";
import "./home.styles.scss";

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

  @media only screen and (max-width: 600px) {
    padding: 0;
  }
`;

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 75%;
  margin-top: 5rem;

  @media only screen and (max-width: 768px) {
    margin-bottom: 5rem;
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

const Home = () => {
  const { data, isLoading } = useFetchRoversData();

  const slideState = useAppSelector((state) => state.slide);
  const [value, setValue] =
    useLocalStorage<{ key: number; value: Photo }[]>("photos");

  const gPickedPics = useMemo(
    () => generateCardInfo(slideState.value, data?.data?.photos),
    [data?.data?.photos, slideState.value]
  );

  if (isLoading) {
    return <Spinner />;
  }

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
    <main className="home_container">
      <SideBar img={logo} />

      <CardSlideContainer>
        {/* Header only for mobile devices */}
        <Header />
        <CardContainer>
          {gPickedPics?.map((obj) => {
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
        <SliderContainer>
          <Slider value={slideState.value} />
        </SliderContainer>

        <BottomContainer>
          <BottomNav />
        </BottomContainer>
      </CardSlideContainer>
    </main>
  );
};
export default Home;
