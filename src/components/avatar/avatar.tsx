import styled from "@emotion/styled";
import { FC } from "react";

const Container = styled.div`
  width: fit-content;
`;

const Img = styled.img`
  object-fit: cover;
  border-radius: 100%;
  width: 6rem;
  height: 5.8rem;
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
