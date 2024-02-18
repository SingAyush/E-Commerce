import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  padding: 20px;
  flex-direction: column;
`;

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div``;

const Right = styled.div`
  flex: 1;
`;
const Center = styled.div`
  flex: 1;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>NIGHTowls</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
          facere? Dolores ullam nemo quibusdam! Delectus eum quas impedit
          perspiciatis? In eum quae sint laborum nostrum esse officia, ea dolor
          placeat.
        </Desc>
        <SocialContainer>
          <SocialIcon>
            <Facebook />
          </SocialIcon>
          <SocialIcon>
            <Instagram />
          </SocialIcon>
          <SocialIcon>
            <Twitter />
          </SocialIcon>
          <SocialIcon>
            <LinkedIn />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Right></Right>
      <Center></Center>
    </Container>
  );
};

export default Footer;
