import styled from "styled-components";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  background-color: #fcf5f5;
  height: 60vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  border: none;
  padding-left: 19px;
  flex: 8;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  width: 50%;
  background-color: white;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #cb5f34;
  color: whitesmoke;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>NewsLetter</Title>
      <Description>Get timely update about your favourite products</Description>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <SendRoundedIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
