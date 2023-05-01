import {
  BestGearContainer,
  BestGearImg,
  BestGearTitle,
  BestGearText,
  FooterContainer,
  FooterImgContainer,
  FooterTexts,
  Description,
  SecondDescription,
  FooterIcons,
  FooterDescriptionAndIcons,
  FooterDesktopContainer,
  DescriptionDesktop,
  SecondDescriptionDesktop,
  FooterTextsDesktop,
  FooterTextsDesktopContainer,
  FooterFirstContainerDesktop
} from "./styles";
import { useNavigate } from "react-router-dom";

function BestGear() {
  const navigate = useNavigate();

  const GoHome = () => {
    window.scrollTo(0, 0); 
    navigate("/home");
  }

  const GoHeadphones = () => {
    window.scrollTo(0, 0); 
    navigate("/products/headphones")
  }

  const GoSpeakers = () => {
    window.scrollTo(0, 0); 
    navigate("/products/speakers")
  }

  const GoEarphones = () => {
    window.scrollTo(0, 0); 
    navigate("/products/earphones")
  }
  return (
    <>
      <BestGearContainer>
        <BestGearImg
          src={`https://audiophile-ecommerce-tunt.onrender.com/allImages/shared/image-best-gear.jpg`}
        />

        <div>

        <BestGearTitle>
          Bringing you the
          <span style={{ color: "rgba(216, 125, 74, 1)" }}> BEST</span> audio
          gear
        </BestGearTitle>

        <BestGearText>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </BestGearText>
        </div>

      </BestGearContainer>

      <FooterContainer>
        <FooterImgContainer>
          <img
            src={`https://audiophile-ecommerce-tunt.onrender.com/allImages/Icons/logo.svg`}
          />
        </FooterImgContainer>
        <FooterTexts>
        <p onClick={GoHome}>Home</p>
          <p onClick={GoHeadphones}>HEADPHONES</p>
          <p onClick={GoSpeakers}>SPEAKERS</p>
          <p onClick={GoEarphones}>EARPHONES</p>
        </FooterTexts>

        <Description>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </Description>

        <FooterDescriptionAndIcons>
          <SecondDescription>
            Copyright 2021. All Rights Reserved
          </SecondDescription>

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
        </FooterDescriptionAndIcons>
      </FooterContainer>

      <FooterDesktopContainer>
        <FooterFirstContainerDesktop>
      <FooterImgContainer>
          <img
            src={`https://audiophile-ecommerce-tunt.onrender.com/allImages/Icons/logo.svg`}
          />
        </FooterImgContainer>

        <DescriptionDesktop>
        Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </DescriptionDesktop>

        <SecondDescriptionDesktop>
        Copyright 2021. All Rights Reserved
        </SecondDescriptionDesktop>
        </FooterFirstContainerDesktop>

        <FooterTextsDesktopContainer>
        <FooterTextsDesktop>
          <p onClick={GoHome}>Home</p>
          <p onClick={GoHeadphones}>HEADPHONES</p>
          <p onClick={GoSpeakers}>SPEAKERS</p>
          <p onClick={GoEarphones}>EARPHONES</p>
        </FooterTextsDesktop>

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
        </FooterTextsDesktopContainer>

      </FooterDesktopContainer>
    </>
  );
}

export default BestGear;
