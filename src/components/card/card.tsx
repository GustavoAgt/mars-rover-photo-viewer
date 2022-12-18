import styled from "@emotion/styled";
import { FC } from "react";
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
`;

const DatesContainer = styled.div`
  position: absolute;
  top: 70%;
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
`;

const TitleDates = styled.span``;

const MoreInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem;
  height: 20%;
  width: 100%;
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
};

const Card: FC<Props> = ({
  img,
  launchDate,
  landingDate,
  earthDatePic,
  name,
  camFullName,
  camaraName,
}) => {
  return (
    <Container>
      <Image src={img} />

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
        <Avatar />
        <NameContainer>
          <Name>{name}</Name>
          <CamName>
            by cam
            <b>
              {camFullName}({camaraName})
            </b>
          </CamName>
        </NameContainer>
      </MoreInfo>
    </Container>
  );
};

export default Card;
