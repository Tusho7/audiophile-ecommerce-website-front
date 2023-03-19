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
} from "./styles";
import { User } from "./types";

function Home({ user, token }: any) {
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

      <BestGear />
    </div>
  );
}

export default Home;
