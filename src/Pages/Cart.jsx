import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Announcements from "../components/Announcements";
import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../responsive";

const Container = styled.div``;

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
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Wrapper = styled.div`
  padding: 23px;
  ${mobile({ padding: "10px" })}
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid gray;
  border-radius: 10px;
  padding: 18px;
  height: 49Hz;
`;

const Info = styled.div`
  flex: 3;
`;

const Image = styled.img`
  width: 200px;
  padding: 5px 0px;
  ${mobile({ width: "170px", height: "170px" })}
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;

const Hr = styled.hr`
  background-color: #34333352;
  border: none;
  height: 1px;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 18px;
`;

const ProductAmount = styled.div`
  font-size: 23px;
  margin: 6px;
  ${mobile({ margin: "5px 15px" })}
`;

const Button = styled.button`
  width: 100%;
  padding: 11px;
  background-color: black;
  color: white;
  font-weight: 700;
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* ${mobile({ flexDirection: "row" })} */
`;

const ProductPrice = styled.div`
  font-size: 32px;
  font-weight: 300;
  ${mobile({ marginBottom: "18px" })}
`;

const SummaryItem = styled.div`
  margin: 29px 1px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "400"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const SummaryTitle = styled.h1`
  font-weight: 300;
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
            <Product>
              <ProductDetails>
                <Image src="https://imgs.search.brave.com/h1I0Okmy3b93Guw7dQx25MvKTuI2md_llhTCLNrJ0gU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MDYxMDc1NTcxOTUt/MGUyOWE0YjViNGFh/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4T0h4OGMy/aHZaWE44Wlc1OE1I/eDhNSHg4ZkRBPQ.jpeg" />
                <Details>
                  <ProductName>
                    <b>Product:</b> Shoes
                  </ProductName>
                  <ProductId>
                    <b>ID: </b>45896325
                  </ProductId>
                  <ProductColor color="greenyellow" />
                  <ProductSize>
                    <b>SIZE: </b>32
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>Rs 1999</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetails>
                <Image src="https://imgs.search.brave.com/DxGFZBB0aRSXQXH1uTo-hcFdFnM30IchmfX8lPKV3k4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4t/dHAyLm1venUuY29t/LzExOTYxLTE2NDkz/L2Ntcy8xNjQ5My9m/aWxlcy80YWM4MzNj/OS1jNGY1LTQzY2It/ODI1Zi01ODZlOTJk/YmEzYjE_cXVhbGl0/eT02MCZtYXg9MjYw/Jl9temNiPV8xNzA5/MzE0NDg3MDIw.jpeg" />
                <Details>
                  <ProductName>
                    <b>Product:</b> Jacket
                  </ProductName>
                  <ProductId>
                    <b>ID: </b>56968712
                  </ProductId>
                  <ProductColor color="gray" />
                  <ProductSize>
                    <b>SIZE: </b>L
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>Rs 3999</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>Final Order</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>SubTotal</SummaryItemText>
              <SummaryItemPrice>Rs 5998</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Cost</SummaryItemText>
              <SummaryItemPrice>Rs 59</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Discount</SummaryItemText>
              <SummaryItemPrice>Rs -149</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>Rs 6157</SummaryItemPrice>
            </SummaryItem>
            <Button>Check Out</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
