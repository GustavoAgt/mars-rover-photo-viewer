import styled from "@emotion/styled";

import Card from "../components/card/card";
import SideBar from "../components/sidebar/sidebar";
import useFetchRoversData from "../hooks/useFetchRoversData";

import logo from "../resources/images/mars-rover2.png";
import "./home.styles.scss";

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
  row-gap: 1rem;
  max-width: 75%;
  margin: 0 auto;
  padding: 2.5rem;
`;

const Home = () => {
  const { data, isLoading } = useFetchRoversData();
  const photos = data?.data?.photos;

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <main className="home_container">
      <SideBar img={logo} />
      <CardContainer>
        {photos?.map((obj) => {
          const { launch_date, landing_date, name } = obj.rover;
          const { full_name, name: camName } = obj.camera;
          return (
            <Card
              key={obj.id}
              img={obj.img_src}
              launchDate={launch_date}
              landingDate={landing_date}
              earthDatePic={obj.earth_date}
              name={name}
              camFullName={full_name}
              camaraName={camName}
            />
          );
        })}
      </CardContainer>
    </main>
  );
};
export default Home;
