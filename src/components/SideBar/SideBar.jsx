import styled from "styled-components";
import { device } from "../../responsive";
import SliderInput from "../common/SliderInput";
import { ProductContext } from "../../context";
import { useContext } from "react";

const Wrapper = styled.div`
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  flex: 1;
  margin-right: 15px;
  max-height: 450px;

  @media ${device.mobile} {
    margin-right: 0px;
    margin-bottom: 20px;
  }
`;

const Section = styled.div`
  width: 100%;
`;

const Heading = styled.div`
  padding: 10px 20px;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 700;
  border-bottom: 1px solid #f1eeee;
  border-top: 1px solid #f1eeee;
`;

const SectionItem = styled.div`
  padding: 8px 35px;
  width: 100%;
  cursor: pointer;
  color: #302f2f;
  font-size: 14px;

  &:hover {
    background-color: #f7f3f3;
  }
`;

const Slider = styled.div`
  padding: 8px 35px;
`;

function SideBar({
  onItemSelect,
  selectedItem,
  priceValue,
  onPriceChange,
  minPrice,
  maxPrice,
}) {
  const context = useContext(ProductContext);
  const { categories } = context;
  return (
    <Wrapper>
      <Section>
        <Heading>Category</Heading>
        {categories.map((category) => (
          <SectionItem
            key={category.id || category.key}
            onClick={() => onItemSelect(category)}
          >
            {category.title}
          </SectionItem>
        ))}
      </Section>
      <Section>
        <Heading>Price</Heading>
        <Slider>
          <SliderInput
            value={priceValue}
            onPriceChange={onPriceChange}
            minPrice={minPrice}
            maxPrice={maxPrice}
          />
        </Slider>
      </Section>
    </Wrapper>
  );
}

export default SideBar;
