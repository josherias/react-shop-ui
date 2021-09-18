import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import React from "react";
import styled from "styled-components";
import logo from "../../images/logo.svg";
import gamboIcon from "../../images/gambo-icon.svg";
import appStoreIcon from "../../images/download-2.svg";
import playStoreIcon from "../../images/download-1.svg";
import { device } from "../../responsive";

const Container = styled.div`
  width: 100%;
  padding: 30px 100px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;

  @media ${device.tablet} {
    padding: 50px 80px;
  }

  @media ${device.mobile} {
    flex-direction: column;
    padding: 50px 10px;
    align-items: center;
    justify-content: center;
  }
`;

const Logo = styled.div`
  flex: 1;
  margin-bottom: 10px;
`;

const Img = styled.img`
  width: 170px;
`;

const NewsLetter = styled.div`
  flex: 2;
  margin: 0px 30px;
  @media ${device.mobile} {
    width: 100%;
    margin: 10px 10px;
  }
`;

const GamboDetails = styled.div`
  width: 100%;
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

const EmailInput = styled.div`
  display: flex;
  margin: 20px 0px;
`;

const InputField = styled.div`
  display: flex;
  background-color: #f1ecec;
  width: 100%;
  padding: 5px;
  border-radius: 3px;
`;

const Icon = styled.div`
  color: #bebebe;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  background-color: transparent;
  padding: 0px 20px;

  &:focus {
    outline: none;
  }
`;

const SubmitButton = styled.button`
  background-color: transparent;
  padding: 8px 10px;
  border: 1px solid black;
  border-radius: 3px;
  margin-left: 8px;
  cursor: pointer;

  &:hover {
    color: #ff5e00;
    border: 1px solid #ff5e00;
  }
`;

const Download = styled.div`
  flex: 1;
  @media ${device.mobile} {
    margin: 10px 0px;
  }
`;

const GamboApp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const GamboIcon = styled.img`
  width: 50px;
`;

const DownloadText = styled.div`
  flex: 2;
  margin-left: 10px;
`;

const DownloadStores = styled.div`
  display: flex;
  margin: 10px 0px;
`;

const StoreIcon = styled.img`
  width: 115px;
  margin-right: 10px;
`;
function FooterRow1() {
  return (
    <Container>
      <Logo>
        <Img src={logo} />
      </Logo>
      <NewsLetter>
        <GamboDetails>
          <Heading>New To Gambo?</Heading>
          <Text>
            Subscribe to our newsletter to get updates on our latest offers!
          </Text>
        </GamboDetails>
        <EmailInput>
          <InputField>
            <Icon>
              <EmailOutlinedIcon />
            </Icon>
            <Input placeholder="Enter e-mail address" />
          </InputField>
          <SubmitButton>Submit</SubmitButton>
        </EmailInput>
      </NewsLetter>
      <Download>
        <GamboApp>
          <GamboIcon src={gamboIcon} />
          <DownloadText>
            <Heading>Download Gambo App free</Heading>
            <Text>Get access to exclusive offers!</Text>
          </DownloadText>
        </GamboApp>

        <DownloadStores>
          <StoreIcon src={playStoreIcon}></StoreIcon>
          <StoreIcon src={appStoreIcon}></StoreIcon>
        </DownloadStores>
      </Download>
    </Container>
  );
}

export default FooterRow1;
