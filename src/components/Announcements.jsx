import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #cb5f34;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
`;

const Announcements = () => {
  return <Container>Free Shipping Till On Order Above Rs 999</Container>;
};

export default Announcements;
