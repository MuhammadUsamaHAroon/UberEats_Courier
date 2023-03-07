import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, {useEffect} from "react";
import { Entypo } from "@expo/vector-icons";
import Orders from "../../data/orders.json";
import { useNavigation } from "@react-navigation/native";
import { Auth } from "aws-amplify";
import { User } from "../../models";
import { DataStore } from "aws-amplify";
import { useState } from "react/cjs/react.production.min";

// const order = Orders[0];

export default function OrderItem({ order }) {
  const [users, setUsers] = useState([])
  const getUsers = async() => {
    const res = await DataStore(User, order.userID)
    setUsers(res)
  }
  useEffect(()=>{
    getUsers();
  }, [])
  console.log("users-->", users)

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
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
        <Text style={styles.rest_name}>{users?.name}</Text>
        <Text style={styles.rest_address}>{users?.address}</Text>
        <Text style={styles.delivery_label}>Delivery Details: </Text>
        <Text style={styles.user_name}>{users?.name}</Text>
        <Text style={styles.user_address}>{users?.address}</Text>
      </View>
      <TouchableOpacity activeOpacity={0.7} style={styles.check_parent} onPress={()=>{
        navigation.navigate("OrdersDeliveryScreen")
        }}>
        <Entypo name="check" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems:'center',

  },
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
