import Category from "./Category";
import {
  NavigationContainer,
  Line,
  HeaderContainer,
  HeaderLogo,
  HeaderTexts,
  H1,
  H2,
  H3,
  ProductButton,
  OrangeContainer,
  PatternImg,
  SpeakerImgContainer,
  SpeakerImg,
  TextsContainer,
  ZxText,
  Title,
  SeeProductButton,
  GreyContainer,
  Grey,
  Zx7Image,
  Texts,
  Zx7Text,
  SeeProductGreyButt,
  DarkDiv,
  DarkDivImg,
  SecondContainer,
  Yx1Text,
  BestGearContainer,
  BestGearImg,
  BestGearTitle,
  BestGearText,
  FooterContainer,
  FooterTexts,
  Description,
  FooterIcons,
} from "./styles";

function Home() {
  return (
    <div>
      <NavigationContainer>
        <div>
          <img
            src={`https://audiophile-ecommerce-tunt.onrender.com/allImages/Icons/icon-hamburger.svg`}
          />
        </div>

        <div>
          <img
            src={`https://audiophile-ecommerce-tunt.onrender.com/allImages/Icons/logo.svg`}
          />
        </div>

        <div>
          <img
            src={`https://audiophile-ecommerce-tunt.onrender.com/allImages/Icons/icon-cart.svg`}
          />
        </div>
      </NavigationContainer>

      <Line />

      <HeaderContainer>
        <HeaderLogo
          src={`https://audiophile-ecommerce-tunt.onrender.com/allImages/home/image-header.jpg`}
        />

        <HeaderTexts>
          <H1>NEW PRODUCT</H1>
          <H2>XX99 Mark II HeadphoneS</H2>
          <H3>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </H3>

          <ProductButton>SEE PRODUCT</ProductButton>
        </HeaderTexts>
      </HeaderContainer>

      <Category />

      <OrangeContainer>
        <PatternImg
          src={`https://audiophile-ecommerce-tunt.onrender.com/allImages/Icons/pattern-circles.svg`}
        />

        <SpeakerImgContainer>
          <SpeakerImg
            src={`https://audiophile-ecommerce-tunt.onrender.com/allImages/shared/image-category-thumbnail-speakers.png`}
          />
        </SpeakerImgContainer>

        <TextsContainer>
          <ZxText>ZX9 SPEAKER</ZxText>
          <Title>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </Title>
        </TextsContainer>

        <div>
          <SeeProductButton>SEE PRODUCT</SeeProductButton>
        </div>
      </OrangeContainer>

      <GreyContainer>
        <Grey>
          <Zx7Image
            src={`https://audiophile-ecommerce-tunt.onrender.com/allImages/home/image-speaker-zx7.jpg`}
          />
          <Texts>
            <Zx7Text>ZX7 SPEAKER</Zx7Text>

            <SeeProductGreyButt>SEE PRODUCT</SeeProductGreyButt>
          </Texts>
        </Grey>
      </GreyContainer>

      <DarkDiv>
        <div>
          <DarkDivImg
            src={`https://audiophile-ecommerce-tunt.onrender.com/allImages/home/image-earphones-yx1.jpg`}
          />
        </div>

        <SecondContainer>
          <Yx1Text>YX1 EARPHONES</Yx1Text>
          <SeeProductGreyButt>SEE PRODUCT</SeeProductGreyButt>
        </SecondContainer>
      </DarkDiv>

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
    </div>
  );
}

export default Home;
