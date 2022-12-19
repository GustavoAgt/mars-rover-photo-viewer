import styled from "@emotion/styled";
import Logo from "../../logo/logo";

import logo from "../../../resources/images/mars-rover2.png";

const Container = styled.header`
  justify-content: center;
  align-items: center;
  width: 100%;
  display: none;
  @media only screen and (max-width: 768px) {
    display: flex;
  }
`;

const Header = () => {
  return (
    <Container>
      <Logo src={logo} width="52" height="52" />
    </Container>
  );
};
export default Header;
