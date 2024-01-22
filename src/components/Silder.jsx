import styled from "styled-components";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #de7309;
  position: relative;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #efe3e3;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props=> props.direction === "left" && "10px"};
  right: ${props=> props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
`;

const Wrapper = styled.div`
    height: 100%;
`

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowBackIosNewOutlinedIcon />
      </Arrow>
      <Arrow direction="right">
        <ArrowForwardIosOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
