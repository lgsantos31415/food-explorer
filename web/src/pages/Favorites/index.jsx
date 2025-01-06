import { Container, Main, Items, Favorite, Column } from "./styles";

import Header2 from "../../components/Header2";
import TextButton from "../../components/TextButton";

import { usePreferences } from "../../hooks/preferences";

import { useEffect, useState } from "react";

import api from "../../services/api";

export default function Favorites() {
  const [food, setFood] = useState([]);
  const { liked, updateLiked } = usePreferences();

  async function fetchData(id) {
    const response = await api.get(`/food/show/${id}`);
    return response.data;
  }

  async function setData() {
    Promise.all(liked.map((item) => fetchData(item))).then((data) => {
      setFood(data);
    });
  }

  useEffect(() => {
    setData();
  }, []);

  useEffect(() => {
    setData();
  }, [liked]);

  return (
    <Container>
      <Header2 />
      <Main>
        <h1>Meus favoritos</h1>
        <Items>
          {food.length > 0 &&
            food.map((item, key) => {
              return (
                <Favorite key={key}>
                  <img
                    src={`${api.defaults.baseURL}/files/${item.image}`}
                    alt={item.name}
                  />
                  <Column>
                    <h1>{item.name}</h1>
                    <TextButton
                      onClick={() => updateLiked(item.id)}
                      color={({ theme }) => theme.colors.tomato[400]}
                    >
                      Remover
                    </TextButton>
                  </Column>
                </Favorite>
              );
            })}
        </Items>
      </Main>
    </Container>
  );
}
