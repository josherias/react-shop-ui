import { Box } from "@mui/system";
import React from "react";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import { FormControl } from "@mui/material";
import { Link } from "react-router-dom";
import { device } from "../responsive";

const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 0px 80px;
  align-items: center;
  justify-content: center;
  height: 80vh;

  @media ${device.mobile} {
    padding: 20px 10px;
    height: 60vh;
  }
`;

const Wrapper = styled.div`
  width: 400px;
  background-color: #fff;
  padding: 20px 20px;
  text-align: center;

  @media ${device.mobile} {
    margin-top: 50px;
  }
`;

const Heading = styled.div`
  width: 100%;
  font-size: 22px;
  margin: 20px 0px;

  @media ${device.mobile} {
    font-size: 18px;
    margin: 15px 0px;
  }
`;

const Form = styled.form`
  margin: 3px 0px;
`;

const Button = styled.button`
  background-color: #faa483;
  color: white;
  font-weight: 600;
  font-size: 15px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin: 15px 0px;
  cursor: pointer;

  &:hover {
    background-color: #fa6930;
  }
`;

const AcctCreate = styled.div`
  width: 100%;
  font-size: 13px;
  text-align: center;
  margin: 20px;
`;

function SignIn() {
  return (
    <Container>
      <Wrapper>
        <Heading>Sign In to Your Gambo Account</Heading>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Box component="form" sx={{ display: "flex", flexWrap: "wrap" }}>
            <FormControl fullWidth sx={{ m: 1 }}>
              <TextField id="email" label="Email" variant="standard" />
            </FormControl>

            <FormControl fullWidth sx={{ m: 1 }}>
              <TextField id="password" label="Password" variant="standard" />
            </FormControl>

            <FormControl fullWidth sx={{ m: 1 }}>
              <Button>Sign In</Button>
            </FormControl>

            <AcctCreate>
              Dont have an account,{" "}
              <Link to="/account/sign-up">Create Account</Link>
            </AcctCreate>
          </Box>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default SignIn;
