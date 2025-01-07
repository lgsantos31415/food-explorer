import {
  Container,
  Main,
  MyOrder,
  Payament,
  Row,
  Row2,
  Column,
  Column2,
  Box,
  Top,
  Option,
  Bottom,
  Column3,
  Column4,
  Row3,
  Input,
} from "./styles";

import Header2 from "../../components/Header2";
import Footer from "../../components/Footer";
import TextButton from "../../components/TextButton";
import Button from "../../components/Button";

import { usePreferences } from "../../hooks/preferences";
import { useMenu } from "../../hooks/menu";

import api from "../../services/api";

import { useEffect, useState } from "react";

import { PiReceipt } from "react-icons/pi";

import { PixLogo, CreditCard } from "@phosphor-icons/react";

import QrCode from "../../assets/qrcode.png";

import { useNavigate } from "react-router-dom";

export default function Order() {
  const { isVisible, setVariation } = useMenu();
  setVariation(2);
  const { order, removeItem } = usePreferences();

  const [food, setFood] = useState([]);
  const [total, setTotal] = useState(0.0);
  const [option, setOption] = useState(1);

  const navigate = useNavigate();

  async function fetchData(id) {
    const response = await api.get(`/food/show/${id}`);
    return response.data;
  }

  async function setData() {
    Promise.all(order.map((item) => fetchData(item.id))).then((data) => {
      setFood(data);
    });
  }

  function convertPrice(price) {
    price = parseFloat(price).toFixed(2);
    let parcel = String(price).split(".");
    return `R$ ${parcel[0].padStart("0", 2)},${parcel[1].padEnd("0", 2)}`;
  }

  function getQuantity(id) {
    const item = order.find((item) => item.id === id);
    return item ? item.quantity : 0;
  }

  useEffect(() => {
    setData();
  }, []);

  function calculateTotal() {
    if (food.length > 0) {
      const prices = food.map((item) => {
        return { id: item.id, price: item.price };
      });
      const quantitys = order.map((item) => {
        return { id: item.id, quantity: item.quantity };
      });
      const totals = quantitys.map((q) => {
        const priceObj = prices.find((p) => p.id === q.id);
        return priceObj.price * q.quantity;
      });

      const myTotal = totals.reduce((count, item) => count + item, 0);

      setTotal(myTotal);
    }
  }

  useEffect(() => {
    calculateTotal();
  }, [food]);

  useEffect(() => {
    setData();
    calculateTotal();
  }, [order]);

  return (
    <Container $isVisible={isVisible}>
      <Header2 />
      <Main>
        <MyOrder>
          <h1>Meu pedido</h1>
          <Column>
            {food.length > 0 &&
              food.map((item, index) => {
                return (
                  <Row key={index}>
                    <img
                      src={`${api.defaults.baseURL}/files/${item.image}`}
                      alt={item.name}
                    />
                    <Column2>
                      <Row2>
                        <h1>
                          {getQuantity(item.id)} x {item.name}
                        </h1>
                        <span>{convertPrice(item.price)}</span>
                      </Row2>
                      <TextButton
                        color={({ theme }) => theme.colors.tomato[400]}
                        onClick={() => removeItem(item.id)}
                      >
                        Excluir
                      </TextButton>
                    </Column2>
                  </Row>
                );
              })}
          </Column>
          <h2>Total: {convertPrice(total)}</h2>
        </MyOrder>
        <Payament>
          <h1>Pagamento</h1>
          <Box>
            <Top $option={option}>
              <Option onClick={() => setOption(1)}>
                <PixLogo />
                PIX
              </Option>

              <Option onClick={() => setOption(2)}>
                <CreditCard />
                Crédito
              </Option>
            </Top>
            <Bottom>
              {option == 1 ? (
                <img src={QrCode} alt="QrCode" />
              ) : (
                <Column3>
                  <Column4>
                    <label htmlFor="numcartao">Número do Cartão</label>
                    <Input id="numcartao" placeholder="0000 0000 0000 0000" />
                  </Column4>
                  <Row3>
                    <Column4>
                      <label htmlFor="validade">Validade</label>
                      <Input id="validade" placeholder="04/25" />
                    </Column4>
                    <Column4>
                      <label htmlFor="cvc">CVC</label>
                      <Input id="cvc" placeholder="000" maxLength={3} />
                    </Column4>
                  </Row3>
                  <Button icon={PiReceipt}>Finalizar pedido</Button>
                </Column3>
              )}
            </Bottom>
          </Box>
        </Payament>
      </Main>
      <Footer />
    </Container>
  );
}
