import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import Orders from "../../data/orders.json";

const order = Orders[0];

export default function OrderItem({ order }) {
  return (
    <View style={styles.row}>
      <Image
        source={{ uri: order.Restaurant.image }}
        style={{
          width: 100,
          height: "100%",
          resizeMode: "stretch",
          borderBottomLeftRadius: 10,
          borderTopLeftRadius: 10,
        }}
      />
      <View style={styles.text_parent}>
        <Text style={styles.rest_name}>{order.Restaurant.name}</Text>
        <Text style={styles.rest_address}>{order.Restaurant.address}</Text>
        <Text style={styles.delivery_label}>Delivery Details: </Text>
        <Text style={styles.user_name}>{order.User.name}</Text>
        <Text style={styles.user_address}>{order.User.address}</Text>
      </View>
      <TouchableOpacity activeOpacity={0.7} style={styles.check_parent}>
        <Entypo name="check" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    borderWidth: 2,
    borderRadius: 12,
    borderColor: "#2fc256",
    flexDirection: "row",
    marginHorizontal: 20,
    width: 340,
    marginVertical: 10,
  },
  text_parent: {
    // width:190,
    paddingLeft: 8,
    paddingVertical: 5,
    flex: 1,
  },
  rest_name: {
    color: "#000",
    fontSize: 17,
    fontWeight: "700",
  },
  rest_address: {
    color: "gray",
    fontSize: 15,
    fontWeight: "600",
  },
  delivery_label: {
    color: "#000",
    fontSize: 16,
    fontWeight: "700",
  },
  user_name: {
    color: "gray",
    fontSize: 15,
    fontWeight: "600",
  },
  user_address: {
    color: "gray",
    fontSize: 15,
    fontWeight: "600",
  },
  check_parent: {
    backgroundColor: "#2fc256",
    width: 45,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    marginLeft: "auto",
  },
});
