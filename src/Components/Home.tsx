import BestGear from "./BestGear";
import Category from "./Category";
import Navigation from "./Navigation";
import {
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
  DesktopHeaderContainer,
  HeaderDesktopTexts,
  DesktopH1,
  DesktopH2,
  DesktopH3,
  ProductDesktopButton,
  OrangeDesktopContainer,
  OrangeDesktopPatternImg,
  SpeakerDesktopImg,
  TextsContainerDesktop,
  ZxTextDesktop,
  TitleDesktop,
  GreyDesktopContainer,
  ZX7SpeakerDesktop,
  GreyDesktopTexts
} from "./styles";
import { useNavigate } from "react-router-dom";


function Home({ user, token, data }: any) {
  const navigate = useNavigate();

  const SeeProduct = () => {
    navigate(`/products/xx99-mark-two-headphones/detail`)
  }

  const SeeZX9 = () => {
    navigate(`/products/zx9-speaker/detail`)
  }

  const SeeZX7 = () => {
    navigate(`/products/zx7-speaker/detail`)
  }

  const SeeYX1 = () => {
    navigate(`/products/yx1-earphones/detail`)
  }
  return (
    <div>
      <Navigation user={user} token={token} />

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

          <ProductButton onClick={SeeProduct}>SEE PRODUCT</ProductButton>
        </HeaderTexts>
      </HeaderContainer>

      <DesktopHeaderContainer>
        <HeaderDesktopTexts>
        <DesktopH1>NEW PRODUCT</DesktopH1>
          <DesktopH2>XX99 Mark II HeadphoneS</DesktopH2>
          <DesktopH3>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </DesktopH3>

          <ProductDesktopButton onClick={SeeProduct}>SEE PRODUCT</ProductDesktopButton>
        </HeaderDesktopTexts>
        
        <img src={`https://audiophile-ecommerce-tunt.onrender.com/allImages/home/image-header.jpg`} />
      </DesktopHeaderContainer>

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
          <SeeProductButton onClick={SeeZX9}>SEE PRODUCT</SeeProductButton>
        </div>
      </OrangeContainer>

      <OrangeDesktopContainer>
        <OrangeDesktopPatternImg src={`https://audiophile-ecommerce-tunt.onrender.com/allImages/Icons/pattern-circles.svg`} />

        <div>
          <SpeakerDesktopImg src={`https://audiophile-ecommerce-tunt.onrender.com/allImages/shared/image-category-thumbnail-speakers.png`} />
        </div>

        <TextsContainerDesktop>
          <ZxTextDesktop>ZX9 SPEAKER</ZxTextDesktop>
          <TitleDesktop>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </TitleDesktop>

        <div>
          <SeeProductButton onClick={SeeZX9}>SEE PRODUCT</SeeProductButton>
        </div>
        </TextsContainerDesktop>

        
      </OrangeDesktopContainer>

      <GreyContainer>
        <Grey>
          <Zx7Image
            src={`https://audiophile-ecommerce-tunt.onrender.com/allImages/home/image-speaker-zx7.jpg`}
          />
          <Texts>
            <Zx7Text>ZX7 SPEAKER</Zx7Text>

            <SeeProductGreyButt onClick={SeeZX7}>SEE PRODUCT</SeeProductGreyButt>
          </Texts>
        </Grey>
      </GreyContainer>

      <GreyDesktopContainer>
        <GreyDesktopTexts>
          <ZX7SpeakerDesktop>ZX7 SPEAKER</ZX7SpeakerDesktop>
          <SeeProductGreyButt onClick={SeeZX7}>SEE PRODUCT</SeeProductGreyButt>
        </GreyDesktopTexts>

          <div>
            <img src={`https://audiophile-ecommerce-tunt.onrender.com/allImages/home/image-speaker-zx7.jpg`} />
          </div>
      </GreyDesktopContainer>

      <DarkDiv>
        <div>
          <DarkDivImg
            src={`https://audiophile-ecommerce-tunt.onrender.com/allImages/home/image-earphones-yx1.jpg`}
          />
        </div>

        <SecondContainer>
          <Yx1Text>YX1 EARPHONES</Yx1Text>
          <SeeProductGreyButt onClick={SeeYX1}>SEE PRODUCT</SeeProductGreyButt>
        </SecondContainer>
      </DarkDiv>

      <BestGear />
    </div>
  );
}

export default Home;
