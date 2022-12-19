import styled from "@emotion/styled";
import { FC } from "react";
import { SecondaryButton } from "../button/button";

import Logo from "../logo/logo";

const Container = styled.div`
  min-height: 100vh;
  min-width: 25rem;
  border-right: 1px #d4d4d4 solid;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 3rem;
`;

type Props = {
  img: any;
};

const SideBar: FC<Props> = ({ img }) => {
  return (
    <Container>
      <Logo src={img} width="52" height="52" />

      <ButtonContainer>
        <SecondaryButton value="Home" width="80%" />
        <SecondaryButton value="Favorites" width="80%" />
        <SecondaryButton value="Discover" width="80%" />
      </ButtonContainer>
    </Container>
  );
};

export default SideBar;
