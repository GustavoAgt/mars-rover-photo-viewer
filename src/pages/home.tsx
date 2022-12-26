import styled from "@emotion/styled";
import useFetchRoversData from "../hooks/useFetchRoversData";
import { useAppSelector } from "../hooks/app.hooks";
import BottomNav from "../components/bottom-nav/bottom-nav.component";

import Header from "../components/mobile/header/header";
import SideBar from "../components/sidebar/sidebar";
import Slider from "../components/slider/slider";
import Spinner from "../components/spinner/spinner";

import logo from "../resources/images/mars-rover2.png";
import "./home.styles.scss";
import CardContainer from "../components/card-container/card-container";

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
  const { isLoading } = useFetchRoversData();
  const photosState = useAppSelector((state) => state.photos);

  if (isLoading || !photosState.photos) {
    return <Spinner />;
  }

  return (
    <main className="home_container">
      <SideBar img={logo} />

      <CardSlideContainer>
        {/* Header only for mobile devices */}
        <Header />
        <CardContainer photos={photosState.generatePhotos} />
        <SliderContainer>
          <Slider value={photosState.sliderValue} />
        </SliderContainer>

        <BottomContainer>
          <BottomNav />
        </BottomContainer>
      </CardSlideContainer>
    </main>
  );
};
export default Home;
