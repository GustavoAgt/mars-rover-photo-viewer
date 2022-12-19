import styled from "@emotion/styled";
import CircularProgress from "@mui/material/CircularProgress";

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
`;

const Spinner = () => {
  return (
    <Container>
      {" "}
      <CircularProgress color="warning" />
    </Container>
  );
};
export default Spinner;
