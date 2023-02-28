import styled from "styled-components";

export const NavigationContainer = styled.div`
  display: flex;
  background: #191919;
  align-items: center;
  gap: 75px;
  padding: 37px 24px;
`;

export const Line = styled.hr`
  width: 100%;
  border: 1px solid #2d2d2d;
`;

export const HeaderContainer = styled.div`
  position: relative;
`;

export const HeaderLogo = styled.img`
  width: 100%;
`;

export const HeaderTexts = styled.div`
  position: absolute;
  top: 200px;
  text-align: center;
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

export const OrangeContainer = styled.div`
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

export const GreyContainer = styled.div`
  background-color: #f1f1f1;
  border-radius: 8px;
  width: 87%;
  margin: auto;
  margin-top: 24px;
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

export const DarkDiv = styled.div`
  width: 87%;
  margin: 24px auto;
  border-radius: 8px;
`;

export const DarkDivImg = styled.img`
  width: 327px;
  height: 200px;
  border-radius: 8px;
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
`;

export const BestGearImg = styled.img`
  width: 100%;
  border-radius: 8px;
  height: 300px;
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

export const FooterIcons = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;
