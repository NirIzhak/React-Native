import { View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import ItemList from "../Data/ItemList.json";
import ItemCard from "../Components/ItemCard";

const ShowItems = () => {
  const [items, setItems] = useState([]);

  const GetData = () => {
    try {
      setItems(ItemList);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    GetData();
  }, []);

  return (
    <FlatList
      data={items}
      renderItem={({ item }) => <ItemCard {...item} />}
      keyExtractor={(item) => item.id}
      style={{ marginTop: 30 }}
    />
  );
};
export default ShowItems;
