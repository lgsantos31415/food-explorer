import {
  Container,
  Main,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  RedCircle,
  OrangeCircle,
  GreenCircle,
  Mobile,
  Row,
  Row2,
} from "./styles";

import Header2 from "../../components/Header2";
import Footer from "../../components/Footer";

import resolutions from "../../styles/adaptativeResolutions";

import api from "../../services/api";

import { useState, useEffect } from "react";

export default function History() {
  const [orders, setOrders] = useState([]);
  const [foods, setFoods] = useState([]);

  async function fetchData(id) {
    const response = await api.get(`/food/show/${id}`);
    return response.data;
  }

  async function start() {
    const response = await api.get("/order");
    setOrders(response.data);
  }

  function getFullDate(date) {
    const utcDate = new Date(date + "Z");

    const options = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "America/Sao_Paulo",
    };

    const dataLocal = new Intl.DateTimeFormat("pt-BR", options).format(utcDate);

    return dataLocal;
  }

  function getStatus(stts) {
    switch (stts) {
      case "pending":
        return { icon: <RedCircle />, message: "Pendente" };
        break;
      case "preparing":
        return { icon: <OrangeCircle />, message: "Preparando" };
        break;
      case "delivered":
        return { icon: <GreenCircle />, message: "Entregue" };
        break;
    }
  }

  useEffect(() => {
    start();

    const handleResize = () => {
      setIsMobile(
        window.innerWidth <= Number(resolutions.medium.split("px")[0])
      );
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= Number(resolutions.medium.split("px")[0])
  );

  return (
    <Container>
      <Header2 />
      <Main>
        <h1>Histórico de pedidos</h1>
        {!isMobile ? (
          <Table>
            <Thead>
              <Tr>
                <Th>Status</Th>
                <Th>Código</Th>
                <Th>Detalhamento</Th>
                <Th>Data e hora</Th>
              </Tr>
            </Thead>
            <Tbody>
              {orders?.length > 0 &&
                orders.map((item, key) => {
                  return (
                    <Tr key={key}>
                      <Td>
                        {getStatus(item.status).icon}
                        {getStatus(item.status).message}
                      </Td>
                      <Td>{String(item.id).padStart(8, "0")}</Td>
                      <Td>
                        {item.ordereds?.length > 0 &&
                          item.ordereds.map((item) => {
                            return `${item.quantity} x ${item.name}`;
                          })}
                      </Td>
                      <Td>{getFullDate(item.created_at)}</Td>
                    </Tr>
                  );
                })}
            </Tbody>
          </Table>
        ) : (
          <Mobile>
            {orders?.length > 0 &&
              orders.map((item, key) => {
                return (
                  <Row key={key}>
                    <Row2>
                      <span>
                        {getStatus(item.status).icon}
                        {getStatus(item.status).message}
                      </span>
                      <span>{String(item.id).padStart(8, "0")}</span>
                      <span>{getFullDate(item.created_at)}</span>
                    </Row2>
                    <p>
                      {item.ordereds?.length > 0 &&
                        item.ordereds.map((item) => {
                          return `${item.quantity} x ${item.name}`;
                        })}
                    </p>
                  </Row>
                );
              })}
          </Mobile>
        )}
      </Main>
      <Footer />
    </Container>
  );
}
