import styled from "@emotion/styled";
import { FC } from "react";
import { SecondaryButton } from "../button/button";

import { FONTS } from "../../utils/variables";

const Container = styled.div`
  height: 110vh;
  min-width: 25rem;
  border-right: 1px #d4d4d4 solid;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 3rem;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
  margin: 1rem 0;
  cursor: pointer;
`;

const Image = styled.img``;

const LogoText = styled.span`
  font-size: 2.5rem;
  font-family: ${FONTS.main_serif_font};
`;

type Props = {
  img: any;
};

const SideBar: FC<Props> = ({ img }) => {
  return (
    <Container>
      <LogoContainer>
        <Image alt="mars-rover-logo" src={img} width="52" height="52" />
        <LogoText>Mars viewer</LogoText>
      </LogoContainer>

      <ButtonContainer>
        <SecondaryButton value="Home" width="80%" />
        <SecondaryButton value="Favorites" width="80%" />
        <SecondaryButton value="Discover" width="80%" />
      </ButtonContainer>
    </Container>
  );
};

export default SideBar;
