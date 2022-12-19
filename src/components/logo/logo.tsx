import { FC } from "react";
import styled from "@emotion/styled";
import { FONTS } from "../../utils/variables";

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
  src: any;
  width: string;
  height: string;
};

const Logo: FC<Props> = ({ src, width, height }) => {
  return (
    <LogoContainer>
      <Image alt="mars-rover-logo" src={src} width={width} height={height} />
      <LogoText>Mars viewer</LogoText>
    </LogoContainer>
  );
};

export default Logo;
