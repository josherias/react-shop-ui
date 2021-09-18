import React from "react";
import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { device } from "../../responsive";

const Container = styled.div`
  width: 100%;
  padding: 50px 100px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;

  @media ${device.tablet} {
    padding: 50px 80px;
  }

  @media ${device.mobile} {
    flex-direction: column;
    padding: 0px 20px;
    text-align: center;
  }
`;

const RowOne = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0px;

  @media ${device.mobile} {
    width: 100%;
  }
`;

const Heading = styled.h3`
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 8px;
  text-transform: uppercase;
`;

const Text = styled.p`
  font-size: small;
  margin-bottom: 5px;
  color: #363535;
`;

const IconRow = styled.div`
  margin: 10px 0px;
  @media ${device.mobile} {
    width: 100%;
  }
`;

const Icons = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin: 10px 0px;
  justify-content: center;
`;

const Icon = styled.div`
  margin-right: 10px;
  color: #a4a5a4;
  cursor: pointer;
  &:hover {
    color: #fc7536;
  }
`;

function FooterRow2() {
  return (
    <Container>
      <RowOne>
        <Heading>ABOUT GAMBO STORES</Heading>
        <Text>About us</Text>
        <Text>GAMBO Careers</Text>
        <Text>IPR Protection Policy</Text>
        <Text>Terms and Conditions</Text>
        <Text>Privacy Policy</Text>
      </RowOne>
      <RowOne>
        <Heading>MAKE MONEY WITH US</Heading>
        <Text>Sell on Gambo</Text>
        <Text>Become a sales consultant</Text>
        <Text>Become a Partner</Text>
      </RowOne>
      <RowOne>
        <Heading>Opperating Countries</Heading>
        <Text>Uganda</Text>
        <Text>Kenya</Text>
        <Text>Tanzania</Text>
        <Text>Rwanda</Text>
        <Text>Burundi</Text>
      </RowOne>
      <IconRow>
        <Heading>Social Media</Heading>
        <Icons>
          <Icon>
            <FacebookIcon />
          </Icon>
          <Icon>
            <TwitterIcon />
          </Icon>
          <Icon>
            <InstagramIcon />
          </Icon>
          <Icon>
            <LinkedInIcon />
          </Icon>
        </Icons>
      </IconRow>
    </Container>
  );
}

export default FooterRow2;
