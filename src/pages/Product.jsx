import { useContext } from "react";
import styled from "styled-components";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import { StarOutline } from "@material-ui/icons";
import { device } from "../responsive";
import { ProductContext } from "../context";

const Container = styled.div`
  padding: 10px 80px;
  margin: 20px 0px;

  @media ${device.tablet} {
    padding: 10px 30px;
    margin: 10px 0px;
  }

  @media ${device.mobile} {
    padding: 10px 10px;
    margin: 10px 0px;
  }
`;

const Wrapper = styled.div`
  background-color: #fff;
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  width: 80%;
`;

const Right = styled.div`
  padding: 10px;
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: 600;
  margin: 5px 0px;
  width: 100%;
`;

const Category = styled.div`
  font-size: 16px;
  color: #8f8d8d;
  text-transform: uppercase;
  margin-bottom: 15px;
`;

const NewPrice = styled.div`
  font-size: 25px;
  color: #f36026;
  margin-bottom: 15px;
`;
const OldPrice = styled.div`
  font-size: 18px;
  color: #424242;
  margin-bottom: 15px;
  display: flex;
`;

const Discount = styled.div`
  text-decoration: line-through;
`;
const Rating = styled.div`
  font-size: 20px;
  display: flex;
  margin-bottom: 15px;
`;

const DescriptionLabel = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
  width: 100%;
  color: #141313;
`;

const Description = styled.div`
  font-size: 14px;
  width: 100%;
  color: #4d4b4b;
  letter-spacing: 1px;
  margin-bottom: 15px;
`;

const CartBtn = styled.button`
  margin-top: 30px;
  margin-bottom: 20px;
  padding: 10px 15px;
  text-transform: uppercase;
  background-color: #e74c1d;
  color: white;
  font-weight: 600;
  border: none;
  cursor: pointer;
  width: 100%;
`;

function Product() {
  const context = useContext(ProductContext);

  const { title, img, price, discountPrice } = context.singleProduct;

  return (
    <Container>
      <Wrapper>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 1 }}>
            <Grid item xs={12} sm={5} md={5}>
              <ImgContainer>
                <Img src={process.env.PUBLIC_URL + "/" + img} alt="img" />
              </ImgContainer>
            </Grid>
            <Grid item xs={12} sm={7} md={7}>
              <Right>
                <Title>{title}</Title>
                <Category>Category</Category>
                <NewPrice>Price : $&nbsp;{price}</NewPrice>
                <OldPrice>
                  Old Price :$&nbsp; <Discount>{discountPrice}</Discount>
                </OldPrice>
                <Rating>
                  <StarOutline />
                  <StarOutline />
                  <StarOutline />
                  <StarOutline />
                  <StarOutline />
                </Rating>
                <DescriptionLabel>Description</DescriptionLabel>
                <Description>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum aperiam obcaecati quam alias ratione eligendi
                  voluptate illo dolores. Impedit, deserunt. Culpa accusamus
                  nihil facere dolores minus delectus exercitationem quos
                  veritatis veniam? Vero ex quisquam necessitatibus magnam
                  porro, temporibus laborum tenetur, quam quo molestias veniam
                  sapiente voluptatum cum ipsam illum repudiandae incidunt
                  ducimus at ut reprehenderit earum debitis fugit, voluptate a.
                  Maxime aliquid, cum repudiandae architecto autem doloremque,
                  quasi libero, quod dolore obcaecati ad accusamus. Minima
                  officia reiciendis quas similique hic exercitationem tempore
                  voluptatibus praesentium iste fuga. Ad, optio ea corporis quas
                  eligendi at adipisci inventore sequi dolorum. Debitis, magni
                  minima?
                </Description>
                <CartBtn>ADD TO CART </CartBtn>
              </Right>
            </Grid>
          </Grid>
        </Box>
      </Wrapper>
    </Container>
  );
}

export default Product;
