import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const ItemCard = ({ url, title, price, desc }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: url }}
        style={{ width: "100%", height: 150, borderRadius: 6 }}/>
      <Text style={styles.BigFont}>{title} - {price} ₪</Text>
      <Text style={styles.SmFont}>{desc} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: "3%",
    marginBottom: "3%",
    borderColor: "grey",
    borderStyle: "solid",
    borderWidth: 1,
    padding: "2%",
    borderRadius: "9%",
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  BigFont: {
    marginTop: "5%",
    fontSize: 30,
    margin: 5,
    fontWeight: "bold",
  },
  MedFont: {
    fontSize: 20,
    margin: 5,
  },
  SmFont: {
    fontSize: 18,
    margin: 5,
    fontFamily: 'Cochin',
  },
});

export default ItemCard;
