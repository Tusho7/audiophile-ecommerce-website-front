import React from "react";
import styled from "styled-components";
import BestGear from "./BestGear";
import Navigation from "./Navigation";

function Checkout() {
  return (
    <MainContainer>
      <Navigation />
      <p>Go Back</p>

      <CheckoutContainer>
        <MainTitle>CHECKOUT</MainTitle>
        <DetailsText>BILLING DETAILS</DetailsText>
        <InputContainer>
          <label>Name</label>
          <input placeholder="Alexei Ward" />
        </InputContainer>
        <InputContainer>
          <label>Email Address</label>
          <input placeholder="alexei@mail.com" />
        </InputContainer>
        <InputContainer>
          <label>Phone Number</label>
          <input placeholder="+1 202-555-0136" />
        </InputContainer>
        <DetailsText>SHIPPING INFO</DetailsText>
        <InputContainer>
          <label>Your Address</label>
          <input placeholder="1137 Williams Avenue" />
        </InputContainer>
        <InputContainer>
          <label>ZIP Code</label>
          <input placeholder="10001" />
        </InputContainer>
        <InputContainer>
          <label>City</label>
          <input placeholder="New York" />
        </InputContainer>
        <InputContainer>
          <label>Country</label>
          <input placeholder="United States" />
        </InputContainer>
        <DetailsText>PAYMENT DETAILS</DetailsText>
        <PaymentMethodText>Payment Method</PaymentMethodText>
        <RadioInputsContainer>
          <label>
            <input type="radio" name="radio-input" value="e-Money" />
            e-Money
          </label>
          <label>
            <input type="radio" name="radio-input" value="Cash on Delivery" />
            Cash on Delivery
          </label>
        </RadioInputsContainer>

        <InputContainer>
          <label>e-Money Number</label>
          <input placeholder="238521993" />
        </InputContainer>
        <InputContainer>
          <label>e-Money-PIN</label>
          <input placeholder="6891" />
        </InputContainer>
      </CheckoutContainer>
      <div>
        <p>SUMMARY</p>
      </div>
      <FooterContainer>
        <img
          src={`https://audiophile-ecommerce-tunt.onrender.com/allImages/Icons/logo.svg`}
        />
        <FooterTexts>
          <p>Home</p>
          <p>HEADPHONES</p>
          <p>SPEAKERS</p>
          <p>EARPHONES</p>
        </FooterTexts>

        <Description>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </Description>

        <Description>Copyright 2021. All Rights Reserved</Description>

        <FooterIcons>
          <img
            src={`https://audiophile-ecommerce-tunt.onrender.com/allImages/Icons/icon-facebook.svg`}
          />
          <img
            src={`https://audiophile-ecommerce-tunt.onrender.com/allImages/Icons/icon-twitter.svg`}
          />
          <img
            src={`https://audiophile-ecommerce-tunt.onrender.com/allImages/Icons/icon-instagram.svg`}
          />
        </FooterIcons>
      </FooterContainer>
    </MainContainer>
  );
}

export default Checkout;

const MainContainer = styled.div`
  background-color: #f2f2f2;
`;

const CheckoutContainer = styled.div`
  width: 87%;
  border-radius: 8px;
  margin: auto;
  background-color: white;
  padding-top: 24px;
  margin-top: 64px;
  padding-left: 23px;
  padding-right: 24px;
  input {
    background: #ffffff;
    border: 1px solid #cfcfcf;
    border-radius: 8px;
    padding-top: 18px;
    padding-bottom: 19px;
    padding-left: 24px;
  }
`;

const MainTitle = styled.p`
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 1px;
  text-transform: uppercase;

  color: #000000;
`;

const DetailsText = styled.p`
  font-weight: 700;
  font-size: 13px;
  line-height: 25px;
  letter-spacing: 0.928571px;
  text-transform: uppercase;
  color: #d87d4a;
`;

const PaymentMethodText = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.214286px;
  color: #000000;
  padding-top: 16px;
  padding-bottom: 16px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: auto;
  padding-bottom: 24px;
  label {
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: -0.214286px;

    color: #000000;
  }
`;

export const FooterContainer = styled.div`
  background-color: #101010;
  color: #ffffff;
  text-align: center;
  margin-top: 120px;
  padding-top: 52px;
  padding-bottom: 38px;
`;

export const FooterTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 48px 0px;
  font-weight: 700;
  font-size: 13px;
  line-height: 25px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #ffffff;
`;

export const Description = styled.div`
  margin: auto;
  padding-bottom: 48px;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.5;
`;

export const FooterIcons = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;

const RadioInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  label {
    padding-top: 18px;
    padding-bottom: 18px;
    padding-left: 24px;
    display: flex;
    align-items: center;
    padding-bottom: 32px;
    border: 1px solid #cfcfcf;
    border-radius: 8px;
  }
  input {
    width: 20px;
    height: 20px;
    margin-right: 16px;
  }
`;
