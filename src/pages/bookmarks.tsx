import { useMemo } from "react";
import styled from "@emotion/styled";
import { useLocalStorage } from "react-haiku";
import Header from "../components/mobile/header/header";
import SideBar from "../components/sidebar/sidebar";
import logo from "../resources/images/mars-rover2.png";
import { Photo } from "../types/photo.types";

import "./bookmarks.styles.scss";
import BottomNav from "../components/bottom-nav/bottom-nav.component";
import CardContainer from "../components/card-container/card-container";

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
  // eslint-disable-next-line
  const [value, _] = useLocalStorage<{ key: number; value: Photo }[]>("photos");

  const extractPhotos = (data: { key: number; value: Photo }[]) => {
    return data?.map((d) => d.value);
  };

  const bookmarkedPics = useMemo(() => extractPhotos(value), [value]);

  return (
    <div className="bookmarks">
      <SideBar img={logo} />
      {/* COMPONETIZE CARD CONTAINER */}

      {bookmarkedPics && bookmarkedPics?.length < 1 ? (
        <NoContent>No photos has been bookmarked</NoContent>
      ) : (
        <CardSlideContainer>
          {/* Header only for mobile devices */}
          <Header />

          <CardContainer photos={bookmarkedPics} />
        </CardSlideContainer>
      )}

      <BottomContainer>
        <BottomNav />
      </BottomContainer>
    </div>
  );
};
export default Bookmarks;
