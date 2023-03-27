import React from "react";
import styled from "styled-components";
import BestGear from "./BestGear";
import Navigation from "./Navigation";
import { Link, useParams } from "react-router-dom";
import Cart from "./Cart";
import { CartType, ProductProps, ProductType } from "./types";
import { useLocation } from "react-router-dom";

function Checkout({ data }: ProductProps) {
  const location = useLocation();
  const { result, formattedTotal } = location.state;

  const numProducts = result.length;

  let shippingCost = 0;

  const shipping = () => {
    if (numProducts === 1) {
      shippingCost = 15;
    } else if (numProducts === 2) {
      shippingCost = 25;
    } else if (numProducts === 3) {
      shippingCost = 35;
    } else if (numProducts === 4) {
      shippingCost = 45;
    } else if (numProducts === 5) {
      shippingCost = 55;
    } else if (numProducts === 6) {
      shippingCost = 65;
    } else if (numProducts === 7) {
      shippingCost = 75;
    } else if (numProducts === 8) {
      shippingCost = 85;
    } else if (numProducts === 9) {
      shippingCost = 95;
    } else if (numProducts === 10) {
      shippingCost = 105;
    } else if (numProducts === 11) {
      shippingCost = 115;
    } else if (numProducts === 12) {
      shippingCost = 125;
    } else if (numProducts === 13) {
      shippingCost = 135;
    } else if (numProducts === 14) {
      shippingCost = 145;
    } else if (numProducts === 15) {
      shippingCost = 155;
    }
  };

  shipping();

  const GrandTotalPrice = shippingCost + parseFloat(formattedTotal.slice(1));
  console.log(GrandTotalPrice);

  return (
    <MainContainer>
      <Navigation />
      <Link to="/home">
        <GoBack>Go Back</GoBack>
      </Link>

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
      <SummaryContainerGlobal>
        <SummaryTitle>SUMMARY</SummaryTitle>

        {result.map((item: any) => (
          <SummaryMainContainer>
            <Img
              src={`https://audiophile-ecommerce-tunt.onrender.com/allImages/${item.image}`}
            />

            <NamePriceAndNumberContainer>
              <div>
                <p>
                  {item.name
                    .replace(/Headphones|Speakers|Earphones/gi, "")
                    .replace(/\bMark\b/gi, "MK")
                    .trim()}
                </p>
                <p>{`$ ${parseFloat(item.price) * item.number}
`}</p>
              </div>

              <p>{"x" + item.number}</p>
            </NamePriceAndNumberContainer>
          </SummaryMainContainer>
        ))}

        <div>
          <p>TOTAL</p>
          <p>{formattedTotal}</p>
        </div>

        <div>
          <p>SHIPPING</p>
          <p>{"$ " + shippingCost}</p>
        </div>

        <div>
          <p>GRAND TOTAL</p>
          <p>{"$ " + GrandTotalPrice}</p>
        </div>

        <SummaryButton>CONTINUE & PAY</SummaryButton>
      </SummaryContainerGlobal>
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

const GoBack = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.5;
  padding-top: 16px;
  padding-left: 24px;
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

const SummaryContainerGlobal = styled.div`
  width: 87%;
  margin: auto;
  background: #ffffff;
  border-radius: 8px;
  margin-top: 32px;
  padding: 24px 24px 32px 24px;
`;

const SummaryTitle = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 1.28571px;
  text-transform: uppercase;
  color: #000000;
  padding-bottom: 31px;
`;

const SummaryMainContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const SummaryButton = styled.button`
  width: 100%;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #ffffff;
  padding: 15px 53px 15px 58px;
  background: #d87d4a;
  border: none;
  margin-top: 32px;
`;

const Img = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 8px;
`;

const NamePriceAndNumberContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 109px;
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
  padding-bottom: 16px;
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
  label:first-child {
    margin-bottom: 16px;
  }
  label:nth-child(2) {
    margin-bottom: 32px;
  }
  input[type="radio"] {
    width: 20px;
    height: 20px;
    margin-right: 16px;
    position: relative;
    &:checked::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #d87d4a;
    }
  }
`;
