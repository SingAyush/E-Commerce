import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://imgs.search.brave.com/vaws9Azt8pdm2aZW3dpc_dGJQLUNnvw7yD4qc4E48EE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2xhcmdlLXByZXZp/ZXdzL2U4Mi9zaG9w/cGluZy0xNDM5NDc3/LmpwZz9mbXQ")
      center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  background-color: #cb8467;
  padding: 20px;
  width: 40%;
  ${mobile({ width: "74%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  display: flex;
  justify-content: space-around;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  border-top-left-radius: 20%;
  border-bottom-right-radius: 20%;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #7f432c;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>
          <b>Create An Account</b>
        </Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the{" "}
            <i>
              <b>PRIVACY POLICY</b>
            </i>
          </Agreement>
          <Button>CREATE AN ACCOUNT</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
