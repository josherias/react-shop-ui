import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import styled from "styled-components";

export default function PaginationComponent() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0px;
  `;

  return (
    <Wrapper>
      <Stack spacing={2}>
        <Pagination count={4} page={page} onChange={handleChange} />
      </Stack>
    </Wrapper>
  );
}
