import styled from "@emotion/styled";
import { FC } from "react";
import example from "../../resources/images/msl_mobile.jpg";

const Container = styled.div`
  display: flex;
  width: 25rem;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.315);
`;

const Image = styled.img`
  height: 50%;
  width: 100%;
  /* border-top-left-radius: 1rem;
  border-top-right-radius: 1rem; */
`;

const Card: FC = ({}) => {
  return (
    <Container>
      <Image src={example} />
    </Container>
  );
};

export default Card;
