import styled from "@emotion/styled";
import Card from "../components/card/card";
import SideBar from "../components/sidebar/sidebar";

import logo from "../resources/images/mars-rover2.png";
import "./home.styles.scss";

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 1rem;
  row-gap: 1rem;
  max-width: 75%;
  margin: 0 auto;
  padding: 2.5rem;
`;

const Home = () => {
  return (
    <main className="home_container">
      <SideBar img={logo} />
      <CardContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardContainer>
    </main>
  );
};
export default Home;
