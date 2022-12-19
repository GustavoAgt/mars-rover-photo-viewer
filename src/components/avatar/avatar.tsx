import styled from "@emotion/styled";
import { FC } from "react";

const Container = styled.div`
  width: 7rem;
  height: 5.6rem;
`;

const Img = styled.img`
  object-fit: cover;
  border-radius: 100%;
  width: 100%;
  height: 100%;
`;
type Props = {
  img: string;
};
const Avatar: FC<Props> = ({ img }) => {
  return (
    <Container>
      <Img src={img} />
    </Container>
  );
};

export default Avatar;
