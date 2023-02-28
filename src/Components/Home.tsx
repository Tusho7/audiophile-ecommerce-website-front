import styled from "styled-components";

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

const NavigationContainer = styled.div`
  display: flex;
  background: #191919;
  align-items: center;
  gap: 75px;
  padding: 37px 24px;
`;

const Line = styled.hr`
  width: 100%;
  border: 1px solid #2d2d2d;
`;

const HeaderContainer = styled.div`
  position: relative;
`;

const HeaderLogo = styled.img`
  width: 100%;
`;

const HeaderTexts = styled.div`
  position: absolute;
  top: 200px;
  text-align: center;
`;

const H1 = styled.h1`
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 10px;
  text-transform: uppercase;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.5;
`;

const H2 = styled.h2`
  font-weight: 700;
  font-size: 36px;
  line-height: 40px;
  margin-top: 16px;
  text-align: center;
  letter-spacing: 1.28571px;
  text-transform: uppercase;
  color: #ffffff;
`;

const H3 = styled.h3`
  width: 87%;
  margin: auto;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  margin-top: 24px;
  text-align: center;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.75;
`;

const ProductButton = styled.button`
  padding: 15px 30px;
  background-color: #d87d4a;
  color: #ffffff;
  border: none;
  margin-top: 28px;
`;

const OrangeContainer = styled.div`
  width: 87%;
  margin: auto;
  margin-top: 120px;
  overflow-x: hidden;
  padding-bottom: 55px;
  text-align: center;
  background-color: #d87d4a;
  border-radius: 8px;
  color: #ffffff;
  position: relative;
  z-index: 999;
`;

const PatternImg = styled.img`
  width: 100%;
  position: absolute;
  right: 0;
  overflow: hidden;
  transform: scale(1.8);
  z-index: -1;
`;

const SpeakerImgContainer = styled.div`
  position: absolute;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50px;
  z-index: 0;
`;

const SpeakerImg = styled.img`
  width: 100%;
`;

const TextsContainer = styled.div`
  padding-top: 310px;
  position: inherit;
  z-index: 1;
`;

const ZxText = styled.h1`
  width: 80%;
  margin: auto;
  font-weight: 700;
  font-size: 36px;
  line-height: 40px;
  text-align: center;
  letter-spacing: 1.28571px;
  text-transform: uppercase;
  color: #ffffff;
`;

const Title = styled.h2`
  width: 85%;
  margin: 24px auto auto auto;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.75;
`;

const SeeProductButton = styled.button`
  background-color: #000000;
  padding: 15px 30px;
  border: none;
  color: #ffffff;
  margin-top: 24px;
`;

const GreyContainer = styled.div`
  background-color: #f1f1f1;
  border-radius: 8px;
  width: 87%;
  margin: auto;
  margin-top: 24px;
`;

const Grey = styled.div`
  position: relative;
  height: 320px;
`;

const Texts = styled.div`
  position: absolute;
  left: 24px;
  top: 100px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Zx7Text = styled.h1`
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #000000;
`;

const SeeProductGreyButt = styled.button`
  width: 75%;
  background-color: #f1f1f1;
  padding: 15px 30px;
  color: #000000;
  border: 1px solid black;
`;

const Zx7Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 320px;
  border-radius: 8px;
`;

const DarkDiv = styled.div`
  width: 87%;
  margin: 24px auto;
  border-radius: 8px;
`;

const DarkDivImg = styled.img`
  width: 327px;
  height: 200px;
  border-radius: 8px;
`;

const SecondContainer = styled.div`
  background: #f1f1f1;
  margin-top: 24px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 41px 0px 41px 24px;
  button {
    width: 56%;
  }
`;

const Yx1Text = styled.h1`
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #000000;
`;

const BestGearContainer = styled.div`
  width: 87%;
  margin: auto;
  border-radius: 8px;
`;

const BestGearImg = styled.img`
  width: 100%;
  border-radius: 8px;
  height: 300px;
`;

const BestGearTitle = styled.h1`
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #000000;
  padding-top: 40px;
`;

const BestGearText = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.5;
  padding-top: 32px;
`;

const FooterContainer = styled.div`
  background-color: #101010;
  color: #ffffff;
  text-align: center;
  margin-top: 120px;
  padding-top: 52px;
  padding-bottom: 38px;
`;

const FooterTexts = styled.div`
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

const Description = styled.div`
  width: 88%;
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

const FooterIcons = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;
