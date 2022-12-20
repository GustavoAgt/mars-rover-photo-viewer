/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

import Avatar from "../avatar/avatar";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 35rem;
  height: 50rem;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.315);
`;

const Image = styled.img`
  height: 80%;
  width: 100%;
  object-position: center;
  object-fit: cover;

  @media only screen and (max-width: 600px) {
    object-fit: fill;
  }
`;

const DatesContainer = styled.div`
  position: absolute;
  top: 68%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 35rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 0.5rem;
  column-gap: 0.7rem;
`;

const Dates = styled.span`
  font-size: 1.7rem;
  font-weight: 700;
  color: #fff;

  @media only screen and (max-width: 600px) {
    font-size: 1.3rem;
  }
`;

const TitleDates = styled.span``;

const MoreInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem;
  height: 20%;
`;

const Name = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 1rem;
`;

const CamName = styled.p`
  color: #a1b2bc;
  font-size: 1.4rem;
  margin: 0;

  & > b {
    margin-left: 0.5rem;
    font-style: italic;
  }
`;

type Props = {
  img: string;
  launchDate: string;
  landingDate: string;
  earthDatePic: string;
  name: string;
  camFullName: string;
  camaraName: string;
  bookmarked: boolean;
  onBookmark: () => void;
};

const Card: FC<Props> = ({
  img,
  launchDate,
  landingDate,
  earthDatePic,
  name,
  camFullName,
  camaraName,
  bookmarked,
  onBookmark,
}) => {
  return (
    <Container>
      <Image
        src={img}
        alt={`${name} photo of mars from cam ${camFullName} also known as ${camaraName}`}
      />

      <DatesContainer>
        <Dates>
          <TitleDates>Launch: </TitleDates>
          {launchDate}
        </Dates>
        <Dates>
          <TitleDates>Landing: </TitleDates> {landingDate}
        </Dates>
        <Dates>
          <TitleDates>Earth Date: </TitleDates> {earthDatePic}
        </Dates>
      </DatesContainer>

      <MoreInfo>
        <Avatar img="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/NASA_Mars_Rover.jpg/1920px-NASA_Mars_Rover.jpg" />
        <NameContainer>
          <Name>{name}</Name>
          <CamName>
            by cam
            <b>
              {camFullName}({camaraName})
            </b>
          </CamName>
        </NameContainer>

        <div>
          <FontAwesomeIcon
            onClick={onBookmark}
            icon={faBookmark}
            fontSize="2.2rem"
            css={css`
              color: ${bookmarked ? "#000" : "#d4d4d4"};
              cursor: pointer;
              & :hover {
                transform: scale(1.1);
              }
            `}
          />
        </div>
      </MoreInfo>
    </Container>
  );
};

export default Card;
