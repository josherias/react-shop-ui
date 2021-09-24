import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0px;
`;

export default function PaginationComponent({
  onPageChange,
  pageSize,
  currentPage,
  itemsCount,
}) {
  const pageCount = Math.ceil(itemsCount / pageSize);

  if (pageCount === 1) return null;
  return (
    <Wrapper>
      <Stack spacing={2}>
        <Pagination
          count={pageCount}
          page={currentPage}
          onChange={onPageChange}
        />
      </Stack>
    </Wrapper>
  );
}
