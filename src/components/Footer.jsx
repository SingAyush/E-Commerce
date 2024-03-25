import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Twitter,
} from "@mui/icons-material";
import GitHubIcon from "@mui/icons-material/GitHub";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}

`;

const Left = styled.div`
  display: flex;
  flex: 1;
  padding: 21px;
  flex-direction: column;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 21px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  margin-right: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Center = styled.div`
  padding: 22px;
  flex: 1;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 29px;
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  list-style: none;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 11px;
`;

const Right = styled.div`
  flex: 1;
  padding: 19px;
  ${mobile({ backgroundColor: "#C0C0C0" })}

`;

const ContactItem = styled.div`
  margin-bottom: 21px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 49%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>LAMA.</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        <SocialContainer>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="000000">
            <GitHubIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Electronics</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> NIT Roukela,Odisha
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +91 7728886509
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />{" "}
          ayushsingh2903@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
