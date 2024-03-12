import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://imgs.search.brave.com/8ygnagtlUUY9HB0Q8RWF9utyMbYBBcP9UQzHf0EJI1w/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNi8w/My8yMy8xOS8zOC9z/aG9wcGluZy1jYXJ0/cy0xMjc1NDgwXzY0/MC5qcGc")
      center;
  display: flex;
  background-size: cover;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  background-color:#874226f8;
  padding: 20px;
  width: 27%;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  display: flex;
  justify-content: space-around;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

`;

const Input = styled.input`
  flex: 1;
  min-width: 35%;
  margin: 10px 0px;
  padding: 12px;
  border-top-left-radius: 20%;
  border-bottom-right-radius: 20%;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #cb5f34;
  color: white;
  cursor: pointer;
  margin-bottom: 2px;
`;

const Link = styled.a`
  margin: 5px 0px;
  padding-top: 5px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>
          <b>SIGN IN</b>
        </Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Link>
            <b>Forgot Password ? </b>
          </Link>
          <Link>
            <b>Create An Account</b>
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
