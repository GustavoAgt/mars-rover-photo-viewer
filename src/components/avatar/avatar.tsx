import styled from "@emotion/styled";

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

const Avatar = () => {
  return (
    <Container>
      <Img
        src={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/NASA_Mars_Rover.jpg/1920px-NASA_Mars_Rover.jpg"
        }
      />
    </Container>
  );
};

export default Avatar;
