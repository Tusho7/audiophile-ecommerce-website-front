import styled from "styled-components";

export const NavigationContainer = styled.div`
  display: flex;
  background: #191919;
  align-items: center;
  gap: 75px;
  padding: 37px 24px;
  @media (min-width: 1440px) {
    padding: 35px 165px;
  }
`;

export const NavigationSecondContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const HamburgerDiv = styled.div`
  @media (min-width: 1440px) {
    display: none;
  }
`;

export const DesktopListContainer = styled.div`
  display: none;
  @media (min-width: 1440px) {
    display: flex;
    gap: 34px;
    font-weight: 700;
    font-size: 13px;
    line-height: 25px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #ffffff;

    p {
      cursor: pointer;
      &:hover {
        color: #d87d4a;
      }
    }
  }
`;

export const Line = styled.hr`
  width: 100%;
  border: 1px solid #2d2d2d;
  @media (min-width: 1440px) {
    width: 78%;
    margin: auto;
    border: 2px solid #2d2d2d;
  }
`;

export const HeaderContainer = styled.div`
  position: relative;
  /* @media (min-width: 1440px){
    background-color: #151515;
    display: flex;
    flex-direction: row-reverse;
    padding-left: 165px;
    padding-right: 165px;
  } */
`;

export const HeaderLogo = styled.img`
  width: 100%;
  @media (min-width: 1440px) {
    display: none;
  }
`;

export const HeaderTexts = styled.div`
  position: absolute;
  top: 200px;
  text-align: center;
  @media (min-width: 1440px) {
    display: none;
  }
`;

export const H1 = styled.h1`
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

export const H2 = styled.h2`
  font-weight: 700;
  font-size: 36px;
  line-height: 40px;
  margin-top: 16px;
  text-align: center;
  letter-spacing: 1.28571px;
  text-transform: uppercase;
  color: #ffffff;
`;

export const H3 = styled.h3`
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

export const ProductButton = styled.button`
  padding: 15px 30px;
  background-color: #d87d4a;
  color: #ffffff;
  border: none;
  margin-top: 28px;
`;

export const DesktopHeaderContainer = styled.div`
  display: none;
  @media (min-width: 1440px) {
    background-color: #191919;
    padding-left: 165px;
    display: flex;
    gap: 55px;
    align-items: center;
  }
`;

export const HeaderDesktopTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const DesktopH1 = styled.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 10px;
  text-transform: uppercase;

  color: #ffffff;

  mix-blend-mode: normal;
  opacity: 0.5;
`;

export const DesktopH2 = styled.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 58px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #ffffff;
`;

export const DesktopH3 = styled.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.75;
`;

export const ProductDesktopButton = styled.button`
  width: 160px;
  padding: 15px 30px;
  background-color: #d87d4a;
  color: #ffffff;
  border: none;
  margin-top: 55px;
  &:hover {
    cursor: pointer;
    background: #fbaf85;
  }
`;

export const OrangeContainer = styled.div`
  width: 87%;
  margin: auto;
  margin-top: 85px;
  overflow-x: hidden;
  padding-bottom: 55px;
  text-align: center;
  background-color: #d87d4a;
  border-radius: 8px;
  color: #ffffff;
  position: relative;
  z-index: 999;
  @media (min-width: 1440px) {
    display: none;
  }
`;

export const PatternImg = styled.img`
  width: 100%;
  position: absolute;
  right: 0;
  overflow: hidden;
  transform: scale(1.8);
  z-index: -1;
`;

export const SpeakerImgContainer = styled.div`
  position: absolute;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50px;
  z-index: 0;
`;

export const SpeakerImg = styled.img`
  width: 100%;
`;

export const TextsContainer = styled.div`
  padding-top: 310px;
  position: inherit;
  z-index: 1;
`;

export const ZxText = styled.h1`
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

export const Title = styled.h2`
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

export const SeeProductButton = styled.button`
  background-color: #000000;
  padding: 15px 30px;
  border: none;
  color: #ffffff;
  margin-top: 24px;
`;

export const OrangeDesktopContainer = styled.div`
  display: none;
  @media (min-width: 1440px) {
    position: relative;
    width: 77%;
    height: 560px;
    margin: auto;
    background: #d87d4a;
    border-radius: 8px;
    display: flex;
    gap: 50px;
    align-items: flex-start;
  }
`;

export const OrangeDesktopPatternImg = styled.img`
  width: 500px;
  height: 560px;
`;

export const SpeakerDesktopImg = styled.img`
  position: absolute;
  left: 60px;
  top: 140px;
`;

export const TextsContainerDesktop = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 160px;
  gap: 24px;
`;

export const ZxTextDesktop = styled.p`
  width: 51%;
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 58px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #ffffff;
`;

export const TitleDesktop = styled.p`
  width: 57%;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.75;
`;

export const GreyContainer = styled.div`
  background-color: #f1f1f1;
  border-radius: 8px;
  width: 87%;
  margin: auto;
  margin-top: 24px;
  @media (min-width: 1440px) {
    display: none;
  }
`;

export const Grey = styled.div`
  position: relative;
  height: 320px;
`;

export const Texts = styled.div`
  position: absolute;
  left: 24px;
  top: 100px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Zx7Text = styled.h1`
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #000000;
`;

export const SeeProductGreyButt = styled.button`
  width: 75%;
  background-color: #f1f1f1;
  padding: 15px 30px;
  color: #000000;
  border: 1px solid black;
`;

export const Zx7Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 320px;
  border-radius: 8px;
`;

export const GreyDesktopContainer = styled.div`
  display: none;
  @media (min-width: 1440px) {
    width: 77%;
    margin: auto;
    margin-top: 48px;
    background-color: #d9d9d9;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    gap: 140px;
    padding-left: 95px;
  }
`;

export const ZX7SpeakerDesktop = styled.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 2px;
  text-transform: uppercase;

  color: #000000;
`;

export const GreyDesktopTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 47px;
`;

export const DarkDiv = styled.div`
  width: 87%;
  margin: 24px auto;
  border-radius: 8px;
  @media (min-width: 1440px) {
    width: 77%;
    margin-top: 48px;
    display: flex;
    align-items: center;
    gap: 30px;
  }
`;

export const DarkDivImg = styled.img`
  width: 327px;
  height: 200px;
  border-radius: 8px;
  @media (min-width: 1440px) {
    width: 540px;
    height: 320px;
  }
`;

export const SecondContainer = styled.div`
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
  @media (min-width: 1440px) {
    margin-top: 0px;
    height: 320px;
    padding: 101px 200px 0px 95px;
  }
`;

export const Yx1Text = styled.h1`
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #000000;
`;

export const BestGearContainer = styled.div`
  width: 87%;
  margin: auto;
  border-radius: 8px;
  @media (min-width: 1440px) {
    width: 77%;
    margin-top: 200px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: 125px;
  }
`;

export const BestGearImg = styled.img`
  width: 100%;
  border-radius: 8px;
  height: 300px;
  @media (min-width: 1440px) {
    width: 540px;
    height: 588px;
  }
`;

export const BestGearTitle = styled.h1`
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #000000;
  padding-top: 40px;
  @media (min-width: 1440px) {
    text-align: left;
    font-weight: 700;
    font-size: 40px;
    line-height: 44px;
  }
`;

export const BestGearText = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.5;
  padding-top: 32px;
  @media (min-width: 1440px) {
    text-align: left;
  }
`;

export const FooterContainer = styled.div`
  background-color: #101010;
  color: #ffffff;
  text-align: center;
  margin-top: 120px;
  padding-top: 52px;
  padding-bottom: 38px;
  @media (min-width: 1440px) {
    display: none;
  }
`;

export const FooterImgContainer = styled.div``;

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

export const SecondDescription = styled.div`
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

export const FooterDescriptionAndIcons = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterIcons = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;

export const FooterDesktopContainer = styled.div`
display: none;
  @media (min-width: 1440px) {
    margin-top: 200px;
    display: flex;
    gap: 141px;
    background: #101010;
    padding: 65px 165px 48px 165px;
  }
`;

export const FooterFirstContainerDesktop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

export const FooterTextsDesktopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 105px;
`;

export const DescriptionDesktop = styled.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.5;
`;

export const SecondDescriptionDesktop = styled.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.5;
`;

export const FooterTextsDesktop = styled.div`
  display: flex;
  gap: 34px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 25px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #ffffff;
`;
