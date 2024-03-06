import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcements from "../components/Announcements";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  padding: 52px;
`;

const ImgContainer = styled.div`
  flex: 1;
  padding: 0px 52px;
`;

const Image = styled.img`
  width: 100%;
  height: 89vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-weight: 300;
`;

const Desc = styled.p`
  margin: 21px 0px;
`;

const Price = styled.span`
  font-size: 44px;
  font-weight: 200;
`;

const FilterContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  margin: 30px 0px;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 23px;
  font-weight: 300;
`;

const FilterColor = styled.div`
  width: 21px;
  height: 21px;
  border-radius: 50%;
  margin: 0px 5px;
  background-color: ${(props) => props.color};
`;

const FilterSize = styled.select`
  margin-left: 11px;
`;

const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
`;
const AmountContainer = styled.div`
  font-weight: 800;
  align-items: center;
  display: flex;
`;
const Amount = styled.span`
  width: 33px;
  height: 33px;
  border-radius: 11px;
  border: 1px solid #319849;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 1px solid #319849;
  background-color: white;
  cursor: pointer;
  font-weight: 400;
  &:hover {
    background-color: #f8f4f4d3;
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo nobis
            reprehenderit molestias, iure maiores tempore ut eos sapiente
            tenetur, et qui cupiditate. Cum fugit velit aspernatur voluptatibus
            suscipit in dolor.
          </Desc>
          <Price>Rs 1999</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>Add To Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
