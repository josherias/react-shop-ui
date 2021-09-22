import React from "react";
import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { device } from "../../responsive";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc9c9;
  border-radius: 5px;
  cursor: pointer;
  padding: 8px;
  flex: 1;
  width: 80%;

  @media ${device.mobile} {
    width: 100%;
  }
`;

const SearchInput = styled.input`
  border: none;
  width: 100%;
  background-color: transparent;
  padding: 0px 20px;

  &:focus {
    outline: none;
  }
`;

const Icon = styled.div``;

function SearchComponent({ value, onChange }) {
  return (
    <Wrapper>
      <Icon>
        <SearchOutlinedIcon />
      </Icon>
      <SearchInput
        type="text"
        placeholder="Search Here ...."
        name="query"
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
    </Wrapper>
  );
}

export default SearchComponent;
