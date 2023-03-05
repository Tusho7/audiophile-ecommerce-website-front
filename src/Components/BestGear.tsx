import {
  BestGearContainer,
  BestGearImg,
  BestGearTitle,
  BestGearText,
  FooterContainer,
  FooterTexts,
  Description,
  FooterIcons,
} from "./styles";
function BestGear() {
  return (
    <>
      <BestGearContainer>
        <BestGearImg
          src={`https://audiophile-ecommerce-tunt.onrender.com/allImages/shared/image-best-gear.jpg`}
        />

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
      </BestGearContainer>

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
    </>
  );
}

export default BestGear;
