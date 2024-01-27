import styled from "styled-components";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #f8f6f5;
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
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
`;

const Wrapper = styled.div`
  height: 100%;
`;

const Slide = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
  background-color: transparent;
`;

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowBackIosNewOutlinedIcon />
      </Arrow>
      <Wrapper>
        <Slide>
          <ImgContainer>
            <Image src="https://st.depositphotos.com/2097531/2144/i/450/depositphotos_21440313-stock-photo-attractive-man-dressed-casual-wearing.jpg" />
          </ImgContainer>
          <InfoContainer>
            <Title>Winter Sale</Title>
            <Desc>Get a Flat 30% Off The New Arrivals.</Desc>
            <Button>Show Now</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right">
        <ArrowForwardIosOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
