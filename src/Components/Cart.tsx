import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CartType } from "./types";

function Cart({ user }: any) {
  const navigate = useNavigate();
  const [cart, setCart] = useState<CartType[]>([]);
  const result = cart.filter((item: CartType) => item.userId === user?.id);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getCarts = async () => {
      const res = await axios.get(
        "https://curious-pear-anemone.cyclic.app/api/carts"
      );
      setCart(res.data);
      setIsLoading(false);
    };
    getCarts();
  }, [cart]);

  const removeFunction = async (id: string | undefined) => {
    const res = await axios.delete(
      `https://curious-pear-anemone.cyclic.app/api/carts/${id}`
    );
  };

  const totalPrice = cart.reduce(
    (total: number, item: CartType) =>
      total + parseFloat(item.price) * item.number,
    0
  );
  const formattedTotal = totalPrice
    .toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    })
    .replace(/\.00$/, "");

  return (
    <Modal>
      <CartContainer>
        <div>
          <CartAndDeleteContainer>
            <H1>CART</H1>
            {isLoading && result.length === 0 && <p>Cart is empty</p>}
            {cart.length !== 0 && (
              <RemoveButton onClick={() => removeFunction(user.id)}>
                Remove all
              </RemoveButton>
            )}
          </CartAndDeleteContainer>
          <ContentContainer>
            {cart.map((item: CartType) => (
              <CartSecondContainer>
                <Img
                  src={`https://curious-pear-anemone.cyclic.app/allImages/${item.image}`}
                />
                <NameAndPrice>
                  <Name>
                    {item.name
                      .replace(/Headphones|Speakers|Earphones/gi, "")
                      .replace(/\bMark\b/gi, "MK")
                      .trim()}
                  </Name>

                  <p>{`$ ${parseFloat(item.price) * item.number}
`}</p>
                </NameAndPrice>

                <QuantityContainer>
                  <button>-</button>
                  <p>{item.number}</p>
                  <button>+</button>
                </QuantityContainer>
              </CartSecondContainer>
            ))}
          </ContentContainer>
        </div>

        <TotalContainer>
          <p>TOTAL</p>
          <p>{formattedTotal}</p>
        </TotalContainer>

        <CheckoutButton>CHECKOUT</CheckoutButton>
      </CartContainer>
    </Modal>
  );
}

export default Cart;

const Modal = styled.div`
  position: fixed;
  z-index: 99999999;
  left: 0;
  top: 105px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  overflow-y: hidden;
`;

const CartContainer = styled.div`
  width: 87%;
  margin: auto;
  margin-top: 24px;
  background: #ffffff;
  border-radius: 8px;
  padding: 32px 28px;
`;

const CartAndDeleteContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: 107px;
  justify-content: center;
`;

const RemoveButton = styled.button`
  border: none;
  background-color: white;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  text-decoration-line: underline;
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.5;
`;

const H1 = styled.h1`
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 1.28571px;
  text-transform: uppercase;
  color: #000000;
  padding-bottom: 31px;
  margin: 0;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const TotalContainer = styled.div`
  display: flex;
  gap: 160px;
  padding-top: 32px;
  p:first-child {
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.5;
  }
  p:second-child {
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    text-transform: uppercase;
    color: #000000;
  }
`;

const CartSecondContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

const Img = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 8px;
`;

const NameAndPrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 75px;
`;

const Name = styled.p`
  flex: 0;
  white-space: nowrap;
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 96px;
  padding: 7px 11px;
  background: #f1f1f1;
  border: none;
  border-radius: 8px;
  gap: 12px;
  button {
    border: none;
  }
`;

const CheckoutButton = styled.button`
  background: #d87d4a;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #ffffff;
  padding: 15px 52px;
  border: none;
  margin: auto;
  margin-top: 24px;
  width: 100%;
`;
