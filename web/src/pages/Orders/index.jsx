import {
  Container,
  Main,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Mobile,
  Row,
  Row2,
} from "./styles";

import Header2 from "../../components/Header2";
import Footer from "../../components/Footer";
import Select from "../../components/Select";

import resolutions from "../../styles/adaptativeResolutions";

import api from "../../services/api";

import { useState, useEffect } from "react";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  async function start() {
    const response = await api.get("/admin/");
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
        return "Pendente";
        break;
      case "preparing":
        return "Preparando";
        break;
      case "delivered":
        return "Entregue";
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
                <Th>Pedido</Th>
                <Th>Usuário</Th>
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
                        <Select value={item.status}>
                          <option value="pending">Pendente</option>
                          <option value="preparing">Preparando</option>
                          <option value="delivered">Entregue</option>
                        </Select>
                      </Td>
                      <Td>{String(item.id).padStart(10, "0")}</Td>
                      <Td>
                        {item.user.name} ({item.user.id})
                      </Td>
                      <Td>
                        {item.ordereds?.length > 0 &&
                          item.ordereds
                            .map((item) => {
                              return `${item.quantity} x ${item.name}`;
                            })
                            .join(", ")}
                      </Td>
                      <Td>
                        {getFullDate(item.created_at).split(", ").join(" às ")}
                      </Td>
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
                      <span>{String(item.id).padStart(10, "0")}</span>
                      <span>
                        {item.user.name} ({item.user.id})
                      </span>
                      <span>
                        {getFullDate(item.created_at).split(", ").join(" às ")}
                      </span>
                    </Row2>
                    <p>
                      {item.ordereds?.length > 0 &&
                        item.ordereds
                          .map((item) => {
                            return `${item.quantity} x ${item.name}`;
                          })
                          .join(", ")}
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
