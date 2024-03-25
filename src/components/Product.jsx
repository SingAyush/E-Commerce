import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const Info = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.2);
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin: 4px;
  min-width: 278px;
  height: 352px;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Image = styled.img`
  height: 74%;
  z-index: 2;
`;

const Circle = styled.div`
  width: 201px;
  height: 201px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 50%;
  width: 39px;
  height: 39px;
  background-color: white;
  align-items: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
    background-color: #e9f5f5;
  }
`;
const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} key={item.id} />
      <Info>
        <Icon>
          <ShoppingCartOutlinedIcon />
        </Icon>
        <Icon>
          <SearchOutlinedIcon />
        </Icon>
        <Icon>
          <FavoriteBorderOutlinedIcon />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
