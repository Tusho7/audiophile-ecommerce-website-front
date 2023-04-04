import { useEffect, useState } from "react";
import styled from "styled-components";
import Navigation from "./Navigation";
import { Form, Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

interface MainContainerProps {
  isModalOpen: boolean;
}

function Checkout() {
  const navigate = useNavigate();
  const location = useLocation();
  const { result, formattedTotal } = location.state;

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [zipCodeError, setZipCodeError] = useState("");
  const [city, setCity] = useState("");
  const [cityError, setCityError] = useState("");
  const [country, setCountry] = useState("");
  const [countryError, setCountryError] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentMethodError, setPaymentMethodError] = useState("");
  const [emoneyNumber, setEmoneyNumber] = useState("");
  const [emoneyNumberError, setEmoneyNumberError] = useState("");
  const [emoneyPIN, setEmoneyPIN] = useState("");
  const [emoneyPINError, setEmoneyPINError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [grandTotalPrice, setGrandTotalPrice] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);

  useEffect(() => {
    const numProducts = result.length;
    let newShippingCost = 0;

    if (numProducts === 1) {
      newShippingCost = 15;
    } else if (numProducts === 2) {
      newShippingCost = 25;
    } else if (numProducts === 3) {
      newShippingCost = 35;
    } else if (numProducts === 4) {
      newShippingCost = 45;
    } else if (numProducts === 5) {
      newShippingCost = 55;
    } else if (numProducts === 6) {
      newShippingCost = 65;
    } else if (numProducts === 7) {
      newShippingCost = 75;
    } else if (numProducts === 8) {
      newShippingCost = 85;
    } else if (numProducts === 9) {
      newShippingCost = 95;
    } else if (numProducts === 10) {
      newShippingCost = 105;
    } else if (numProducts === 11) {
      newShippingCost = 115;
    } else if (numProducts === 12) {
      newShippingCost = 125;
    } else if (numProducts === 13) {
      newShippingCost = 135;
    } else if (numProducts === 14) {
      newShippingCost = 145;
    } else if (numProducts === 15) {
      newShippingCost = 155;
    }

    const formattedTotalNum = parseFloat(formattedTotal.replace(/[$,]/g, ""));
    const grandTotalPrice = shippingCost + formattedTotalNum;
    setShippingCost(newShippingCost);
    setGrandTotalPrice(grandTotalPrice);
  }, [result, formattedTotal]);

  const validateName = () => {
    if (!name) {
      setNameError("Name is required");
      return false;
    }
    setNameError("");
    return true;
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError("Email is required");
      return false;
    } else if (!emailRegex.test(email)) {
      setEmailError("Invalid email address");
      return false;
    }
    setEmailError("");
    return true;
  };

  const validatePhone = () => {
    const phoneRegex = /^\d{9}$/;
    if (!phone) {
      setPhoneError("Phone number is required");
      return false;
    } else if (!phoneRegex.test(phone)) {
      setPhoneError("Invalid phone number");
      return false;
    }
    setPhoneError("");
    return true;
  };

  const validateAddress = () => {
    if (!address) {
      setAddressError("Address is required");
      return false;
    }
    setAddressError("");
    return true;
  };

  const validateZipCode = () => {
    const zipCodeRegex = /^\d{5}$/;
    if (!zipCode) {
      setZipCodeError("Zip code is required");
      return false;
    } else if (!zipCodeRegex.test(zipCode)) {
      setZipCodeError("Invalid zip code");
      return false;
    }
    setZipCodeError("");
    return true;
  };

  const validateCity = () => {
    if (!city) {
      setCityError("City is required");
      return false;
    }
    setCityError("");
    return true;
  };

  const validateCountry = () => {
    if (!country) {
      setCountryError("Country is required");
      return false;
    }
    setCountryError("");
    return true;
  };

  const validatePaymentMethod = () => {
    if (!paymentMethod) {
      setPaymentMethodError("Payment method is required");
      return false;
    }
    setPaymentMethodError("");
    return true;
  };

  const validateEmoneyNumber = () => {
    if (paymentMethod === "e-Money" && !emoneyNumber) {
      setEmoneyNumberError("e-Money number is required");
      return false;
    }
    setEmoneyNumberError("");
    return true;
  };

  const validateEmoneyPIN = () => {
    const emoneyPINRegex = /^\d{4}$/;
    if (paymentMethod === "e-Money" && !emoneyPIN) {
      setEmoneyPINError("e-Money PIN is required");
      return false;
    } else if (paymentMethod === "e-Money" && !emoneyPINRegex.test(emoneyPIN)) {
      setEmoneyPINError("Invalid e-Money PIN");
      return false;
    }
    setEmoneyPINError("");
    return true;
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 60);
  };
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isAddressValid = validateAddress();
    const isZipCodeValid = validateZipCode();
    const isCityValid = validateCity();
    const isCountryValid = validateCountry();
    const isPaymentMethodValid = validatePaymentMethod();
    const isEmoneyNumberValid = validateEmoneyNumber();
    const isEmoneyPINValid = validateEmoneyPIN();

    if (
      isNameValid &&
      isEmailValid &&
      isPhoneValid &&
      isAddressValid &&
      isZipCodeValid &&
      isCityValid &&
      isCountryValid &&
      isPaymentMethodValid &&
      isEmoneyNumberValid &&
      isEmoneyPINValid
    ) {
      handleOpenModal();
    }
  };

  const modalClick = () => {
    navigate("/home");
  };

  useEffect(() => {
    const body = document.querySelector("body")!;
    if (isModalOpen) {
      body.classList.add("modal-open");
    } else {
      body.classList.remove("modal-open");
    }
  }, [isModalOpen]);

  return (
    <>
      <MainContainer>
        <Navigation />
        <Link to="/home">
          <GoBack>Go Back</GoBack>
        </Link>

        <Foorm isModalOpen={isModalOpen}>
          <CheckoutContainer>
            <MainTitle>CHECKOUT</MainTitle>
            <DetailsText>BILLING DETAILS</DetailsText>
            <InputContainer>
              <label>Name</label>
              <input
                placeholder="Alexei Ward"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {nameError && <ErrorText>{nameError}</ErrorText>}
            </InputContainer>
            <InputContainer>
              <label>Email Address</label>
              <input
                placeholder="alexei@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <ErrorText>{emailError}</ErrorText>}
            </InputContainer>
            <InputContainer>
              <label>Phone Number</label>
              <input
                placeholder="599 99 99 99"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              {phoneError && <ErrorText>{phoneError}</ErrorText>}
            </InputContainer>
            <DetailsText>SHIPPING INFO</DetailsText>
            <InputContainer>
              <label>Your Address</label>
              <input
                placeholder="1137 Williams Avenue"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              {addressError && <ErrorText>{addressError}</ErrorText>}
            </InputContainer>
            <InputContainer>
              <label>ZIP Code</label>
              <input
                placeholder="10001"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
              />
              {zipCodeError && <ErrorText>{zipCodeError}</ErrorText>}
            </InputContainer>
            <InputContainer>
              <label>City</label>
              <input
                placeholder="New York"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              {cityError && <ErrorText>{cityError}</ErrorText>}
            </InputContainer>
            <InputContainer>
              <label>Country</label>
              <input
                placeholder="United States"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
              {countryError && <ErrorText>{countryError}</ErrorText>}
            </InputContainer>
            <DetailsText>PAYMENT DETAILS</DetailsText>
            <PaymentMethodText>Payment Method</PaymentMethodText>
            <RadioInputsContainer>
              <label>
                <input
                  type="radio"
                  name="radio-input"
                  value="e-Money"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                e-Money
              </label>
              <label>
                <input
                  type="radio"
                  name="radio-input"
                  value="Cash on Delivery"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                Cash on Delivery
              </label>
            </RadioInputsContainer>
            {paymentMethod === "e-Money" && (
              <>
                <InputContainer>
                  <label>e-Money Number</label>
                  <input
                    placeholder="238521993"
                    value={emoneyNumber}
                    onChange={(e) => setEmoneyNumber(e.target.value)}
                  />
                  {emoneyNumberError && (
                    <ErrorText>{emoneyNumberError}</ErrorText>
                  )}
                </InputContainer>
                <InputContainer>
                  <label>e-Money-PIN</label>
                  <input
                    placeholder="6891"
                    value={emoneyPIN}
                    onChange={(e) => setEmoneyPIN(e.target.value)}
                  />
                  {emoneyPINError && <ErrorText>{emoneyPINError}</ErrorText>}
                </InputContainer>
              </>
            )}
          </CheckoutContainer>
          <SummaryContainerGlobal>
            <SummaryTitle>SUMMARY</SummaryTitle>

            {result.map((item: any) => (
              <SummaryMainContainer key="">
                S
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

            <FinalPriceContainer>
              <TitleAndPriceContainer>
                <h4>TOTAL</h4>
                <p>{formattedTotal}</p>
              </TitleAndPriceContainer>

              <TitleAndPriceContainer>
                <h4>SHIPPING</h4>
                <p>{"$ " + shippingCost}</p>
              </TitleAndPriceContainer>

              <TitleAndPriceContainer>
                <h4>GRAND TOTAL</h4>
                <GrandTotal>{"$ " + grandTotalPrice.toFixed(2)}</GrandTotal>
              </TitleAndPriceContainer>
            </FinalPriceContainer>

            <SummaryButton onClick={handleSubmit}>CONTINUE & PAY</SummaryButton>
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
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
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
        </Foorm>

        {isModalOpen && (
          <ModalContainer>
            <img src="https://audiophile-ecommerce-tunt.onrender.com/allImages/checkout/checkout.svg" />

            <ModalTitle>THANK YOU FOR YOUR ORDER</ModalTitle>
            <ModalText>
              You will receive an email confirmation shortly.
            </ModalText>

            <div>
              {result.map((item: any) => (
                <ModalProductsContainer>
                  <div>
                    <ModalImg
                      src={`https://audiophile-ecommerce-tunt.onrender.com/allImages/${item.image}`}
                    />
                  </div>

                  <ProductsDescriptionMainContainer>
                    <ProductsDescriptionContainer>
                      <p>
                        {item.name
                          .replace(/Headphones|Speakers|Earphones/gi, "")
                          .replace(/\bMark\b/gi, "MK")
                          .trim()}
                      </p>
                      <p>{`$ ${parseFloat(item.price) * item.number}
`}</p>
                    </ProductsDescriptionContainer>

                    <Xnumber>{"x" + item.number}</Xnumber>
                  </ProductsDescriptionMainContainer>
                </ModalProductsContainer>
              ))}
              <ModalBlackContainer>
                <p>GRAND TOTAL</p>
                <p>{"$ " + grandTotalPrice}</p>
              </ModalBlackContainer>
            </div>

            <div>
              <ModalButton onClick={modalClick}>BACK TO HOME</ModalButton>
            </div>
          </ModalContainer>
        )}
      </MainContainer>
    </>
  );
}

export default Checkout;

const MainContainer = styled.div`
  background-color: #f2f2f2;
`;

const Foorm = styled.form<MainContainerProps>`
  ${(props) =>
    props.isModalOpen &&
    `
    &:after {
      content: "";
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      z-index: 1;
    }
    z-index: 2;
  `}
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

const FinalPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 32px;
  div:last-child {
    margin-top: 16px;
  }
`;

const TitleAndPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h4 {
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.5;
  }
  p {
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    text-align: right;
    text-transform: uppercase;
    color: #000000;
  }
`;

const GrandTotal = styled.h1`
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  text-align: right;
  text-transform: uppercase;
  color: #d87d4a;
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
  width: 100%;
  justify-content: space-between;
  p:first-child {
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 25px;
    color: #000000;
  }
  p:last-child {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 25px;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.5;
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

const ErrorText = styled.p`
  width: 100%;
  padding-left: 20px;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: red;
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

const ModalContainer = styled.div`
  width: 87%;
  margin: auto;
  background: #ffffff;
  border-radius: 8px;
  padding: 32px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const ModalTitle = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.857143px;
  text-transform: uppercase;
  color: #000000;
  padding-top: 24px;
`;

const ModalText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  padding-top: 16px;
  padding-bottom: 24px;
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.5;
`;

const ModalProductsContainer = styled.div`
  width: 100%;
  background: #f1f1f1;
  border-radius: 8px;
  display: flex;
  align-items: flex-start;
  gap: 27px;
  padding: 25px 24px 21px 35px;
`;

const ProductsDescriptionMainContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const ProductsDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  p:first-child {
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 25px;
    color: #000000;
  }
  p:last-child {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 25px;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.5;
  }
`;

const Xnumber = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
  text-align: right;
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.5;
`;

const ModalBlackContainer = styled.div`
  background: #000000;
  border-radius: 0px 0px 8px 8px;
  color: #ffffff;
  padding-top: 15px;
  padding-left: 24px;
  padding-bottom: 19px;
  p:first-child {
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    mix-blend-mode: normal;
    opacity: 0.5;
  }
  p:last-child {
    padding-top: 8px;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    text-transform: uppercase;
  }
`;

const ModalImg = styled.img`
  width: 40px;
  height: 40px;
`;

const ModalButton = styled.button`
  width: 100%;
  background: #d87d4a;
  padding: 15px 50px 15px 55px;
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #ffffff;
  border: none;
  margin-top: 23px;
`;
