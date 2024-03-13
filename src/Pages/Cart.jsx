import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Announcements from "../components/Announcements";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 23px;
`;

const Title = styled.h1`
  font-weight: 400;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopBut = styled.button`
  padding: 10px;
  font-weight: 500;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && white};
`;

const TopTexts = styled.div``;

const TopText = styled.div`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
  flex: 3;
`;
const Summary = styled.div`
  flex: 1;

`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Wrapper>
        <Title>YOUR CART</Title>
        <Top>
          <TopBut>Continue Shopping</TopBut>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          <TopBut type="filled">CheckOut Now</TopBut>
        </Top>
        <Bottom>
          <Info>
            <Product></Product>
          </Info>
          <Summary></Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
